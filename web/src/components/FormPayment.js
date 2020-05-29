import React, { useState, useEffect } from 'react';

import '../styles.css';

function FormPayment({onSubmit}){         
    const [passphrase, setPassphrase] = useState('');

    useEffect(() => {

    });

    async function handleSubmit(e){
        e.preventDefault();

        await onSubmit({
            passphrase
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