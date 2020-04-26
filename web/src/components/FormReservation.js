import React, { useState, useEffect } from 'react';

import '../styles.css';

function FormReservation({onSubmit}){    
    const [transactionId, setTransaction] = useState('');

    async function handleSubmit(e){
        e.preventDefault();

        await onSubmit({
            transactionId
        });
        
        setTransaction('');
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
                        <button type="submit">Retrieve information of transaction request</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormReservation;