import React, { useState, useEffect } from 'react';

import '../styles.css';

function FormOrder({onSubmit}){
    const [username, setUsername] = useState('');
    const [passphrase, setPassphrase] = useState('');    

    useEffect(() => {

    });

    async function handleSubmit(e){
        e.preventDefault();

        await onSubmit({
            username,
            passphrase
        });

        setUsername('');
        setPassphrase('');        
    }

    return (
        <div id="app">
            <div id="content" align="center">                
                <form onSubmit={handleSubmit}>
                    <input type="hidden" id="request_type" name="request_type"></input>
                    <div>
                        <label>Your Name</label>
                        <input type="text" id="username" name="username" required onChange={e=> setUsername(e.target.value)}/>
                    </div>
                    <div>
                        <label>Your Lisk Passphrase</label>
                        <input type="text" id="passphrase" name="passphrase" required onChange={e=> setPassphrase(e.target.value)}/>
                    </div>
                    <div>
                        <button type="submit">Order</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormOrder;