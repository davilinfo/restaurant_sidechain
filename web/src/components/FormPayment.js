import React, { useState, useEffect } from 'react';

import '../styles.css';

const cryptography = require('@liskhq/lisk-cryptography');

function FormPayment({onSubmit}){         
    const [passphrase, setPassphrase] = useState('');   

    async function handleSubmit(e){
        e.preventDefault();

        console.log(passphrase);
        const encryptedPassphrase = cryptography.encryptPassphraseWithPassword(passphrase, 'luxuryRestaurant');

        await onSubmit({
            encryptedPassphrase
        });

        setPassphrase('');
    }

    return (
        <div id="app">
            <div id="content" align="center">                
                <form onSubmit={handleSubmit}>
                    <input type="hidden" id="deliveryaddress" name="deliveryaddress"></input>
                    <div>
                        <label>Passphrase</label>
                    </div>
                    <div>
                        <input type="text" id="passphrase" name="passphrase" required onChange={e=> setPassphrase(e.target.value)}/>
                    </div>                    
                    <div>
                        <button type="submit">Payment</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormPayment;