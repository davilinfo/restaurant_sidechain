import React, { useState, useEffect } from 'react';
import api from '../services/api';
import '../styles.css';

const cryptography = require('@liskhq/lisk-cryptography');
const FoodRequest = require("liskrestaurant_transactions");
const transaction = require("@liskhq/lisk-transactions");

function FormPayment({onSubmit}, props){    
    const [passphrase, setPassphrase] = useState('');    
    
    var orderstring = decodeURI(document.location.href.split("?")[1]);
        if (orderstring !== null && orderstring !== undefined){    
            orderstring = orderstring.split("&");                                      
        }
    
    async function handleSubmit(e){
        e.preventDefault();
        
        var username = await api.post("/cryptography", { text: orderstring[5].split('=')[1] });
        var phone = await api.post("/cryptography", { text: orderstring[6].split('=')[1] });
        var deliveryaddress = await api.post("/cryptography", { text: orderstring[7].split('=')[1] });
        var observation = "";
        if (orderstring[8] !== undefined){
            observation = await api.post("/cryptography", { text: orderstring[8].split('=')[1] });
        }        
        
        const publicKey = cryptography.getPrivateAndPublicKeyFromPassphrase(passphrase).publicKey;

        var clientData = cryptography.encryptMessageWithPassphrase(
            orderstring[5].split('=')[1].concat(' ***Field*** ')
            .concat(orderstring[6].split('=')[1]).concat(' ***Field*** ')
            .concat(orderstring[7].split('=')[1]).concat(' ***Field*** ')
            .concat(orderstring[8].split('=')[1]),
            passphrase,
            publicKey
            );                            

        /*const networkIdentifier = cryptography.getNetworkIdentifier(
            "23ce0366ef0a14a91e5fd4b1591fc880ffbef9d988ff8bebf8f3666b0c09597d",
            "Lisk",
        );*/        

        var encryptedclient= cryptography.encryptMessageWithPassphrase(passphrase, passphrase, orderstring[9].split('=')[1]);

        let txFood = new FoodRequest({
            asset: {
                name: orderstring[2].split('=')[1],
                description: orderstring[2].split('=')[1],
                username: username.data.response,
                phone: phone.data.response,
                deliveryaddress: deliveryaddress.data.response,
                foodType: orderstring[3].split('=')[1],
                observation: observation.data !== undefined ? observation.data.response : "",
                clientData: clientData.encryptedMessage,
                clientNonce: clientData.nonce,
                amount: orderstring[1].split('=')[1].toString(),
                recipientId: orderstring[0].split('=')[1], //restaurant lisk address
                key: encryptedclient.encryptedMessage,
                keynonce: encryptedclient.nonce,
                clientpublickey: cryptography.getAddressAndPublicKeyFromPassphrase(passphrase).publicKey
            },                
            timestamp: transaction.utils.getTimeFromBlockchainEpoch(new Date()),
            //networkIdentifier: networkIdentifier
        });             

        //txFood.sign(passphrase);                

        await onSubmit({         
            txFood            
        });
        
        setPassphrase('');        
    }    

    return (
        <div id="app">
            <div id="content" align="center">                
                <form onSubmit={handleSubmit}>                                  
                    <div>
                        <label>Your Lisk Passphrase</label>
                    </div>
                    <div>
                        <input type="password" id="passphrase" name="passphrase" required onChange={e=> setPassphrase(e.target.value)}/>
                    </div>
                    <div>
                        <label>copy this passphrase and test above if desired: creek own stem final gate scrub live shallow stage host concert they</label>
                    </div>
                    <div>
                        <button type="submit">Order</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormPayment;
