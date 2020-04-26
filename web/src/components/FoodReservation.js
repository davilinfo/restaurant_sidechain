import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import api from '../services/api';
import FormReservation from './FormReservation';
import '../styles.css';
const transactions = require("@liskhq/lisk-transactions");

function FoodReservation(props){                   
    var [foodRequest, setFoodRequest] = useState([]);            

    async function handleSubmit(data){                

        foodRequest = await api.post('/transaction', data);   
        setFoodRequest(foodRequest);    
                
        const transaction_result = (
            <div className="recipes_topic">                    
                Transaction result: {foodRequest.data.status}
                <br />
                Transaction id: {foodRequest.data.response.data.id}
                <br/>
                Paid Amount: LSK {transactions.utils.convertBeddowsToLSK(foodRequest.data.response.data.amount)}
                <br/>
                Payer LSK address: {foodRequest.data.response.data.senderId}
                <br/>
                Restaurant LSK address: {foodRequest.data.response.data.recipientId}                               
                <div className="clear"></div>
            </div>
        );

        ReactDOM.render(transaction_result, document.getElementById('content'));        
    }        

    return (
        <div id="app">
            <div id="content" align="center">                
                <FormReservation onSubmit={handleSubmit}></FormReservation>                
            </div>
        </div>
    );
}

export default FoodReservation;