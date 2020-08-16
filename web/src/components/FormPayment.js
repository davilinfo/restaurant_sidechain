import React, { useState, useEffect } from 'react';
import api from '../services/api';
import '../styles.css';

const cryptography = require('@liskhq/lisk-cryptography');
const FoodRequest = require("liskrestaurant_transactions");

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

        const txFood = new FoodRequest({
            asset: {
                name: orderstring[2].split('=')[1],
                description: orderstring[2].split('=')[1],
                username: username.data.response,
                phone: phone.data.response,
                deliveryaddress: deliveryaddress.data.response,
                foodType: orderstring[3].split('=')[1]
            },
            amount: orderstring[1].split('=')[1].toString(),
            recipientId: orderstring[0].split('=')[1], //restaurant lisk address
            timestamp: parseInt(orderstring[4].split('=')[1])
        });

        txFood.sign(passphrase);                

        await onSubmit({         
            txFood            
        });
        
        setPassphrase('');        
    }

    /*
    async function handleSubmit(e){
        e.preventDefault();        
        
        const encryptedPassphrase =  cryptography.encryptPassphraseWithPassword(passphrase, '');

        await onSubmit({                     
            encryptedPassphrase
        });
        
        setPassphrase('');        
    }*/

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
                        <label>copy this passphrase and test above if desired: wagon stock borrow episode laundry kitten salute link globe zero feed marble</label>
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
