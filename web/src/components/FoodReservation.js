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
                Transaction result: {order.data.status}
                <br />
                Transaction id: {order.data.response.transaction.id}
                <br/>
                Paid Amount: LSK {transactions.utils.convertBeddowsToLSK(order.data.response.transaction.amount)}
                <br/>
                Payer LSK address: {order.data.response.transaction.senderId}
                <br/>
                Restaurant LSK address: {order.data.response.transaction.recipientId}                               
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