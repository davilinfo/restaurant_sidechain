import React, { useState, useEffect } from 'react';

import '../styles.css';

const cryptography = require('@liskhq/lisk-cryptography');

function FormPayment({onSubmit}){    
    const [passphrase, setPassphrase] = useState('');    

    async function handleSubmit(e){
        e.preventDefault();

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
                    <div>
                        <label>Your Lisk Passphrase</label>
                    </div>
                    <div>
                        <input type="text" id="passphrase" name="passphrase" required onChange={e=> setPassphrase(e.target.value)}/>
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