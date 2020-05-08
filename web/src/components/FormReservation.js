import React, { useState, useEffect } from 'react';

import '../styles.css';

function FormReservation({onSubmit}){    
    const [transactionId, setTransaction] = useState('');
    const [phone, setPhone] = useState('');

    async function handleSubmit(e){
        e.preventDefault();

        await onSubmit({
            transactionId,
            phone
        });
        
        setTransaction('');
        setPhone('');
    }

    return (
        <div id="app">
            <div id="content" align="center">                
                <form onSubmit={handleSubmit}>
                    <input type="hidden" id="request_type" name="request_type"></input>
                    <div>
                        <label>Transaction id</label>
                    </div>
                    <div>
                        <input type="text" id="transactionId" name="transactionId" required onChange={e=> setTransaction(e.target.value)}/>
                    </div>
                    <div>
                        <label>Phone number</label>
                    </div>
                    <div>
                        <input type="text" id="phone" name="phone" onChange={e=> setPhone(e.target.value)}/>
                    </div>                    
                    <div>
                        <button type="submit">Retrieve information of transaction requested</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormReservation;