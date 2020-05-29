import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import api from '../services/api';
import FormPayment from './FormPayment';
import '../styles.css';

//const FoodRequest = require ('../FoodTransaction');
const cryptography = require('@liskhq/lisk-cryptography');
const transactions = require("@liskhq/lisk-transactions");

function FoodOrderPayment(props){            
    var orderstring = document.location.pathname.split("/")[2];    
    orderstring = orderstring.split("&");

    var food = {};
    food.recipientAddress = orderstring[0].split('=')[1];
    food.amount = orderstring[1].split('=')[1];
    food.name = orderstring[2].split('=')[1];
    food.foodtype = orderstring[3].split('=')[1];
    food.timestamp = orderstring[4].split('=')[1];
    food.username = orderstring[5].split('=')[1];
    food.phone = orderstring[6].split('=')[1];
    food.deliveryaddress = orderstring[7].split('=')[1];        

    var [order, setOrder] = useState([]);            

    async function handleSubmit(data){                
        
        const transaction_result = (
            <div className="recipes_topic">                    
                Testing             
                <div className="clear"></div>
            </div>
        )
/*
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
                <br/>
                Broadcast info: {order.data.response.broadcastInfo.data.message}                
                <div className="clear"></div>
            </div>
        );
*/
        ReactDOM.render(transaction_result, document.getElementById('content'));        
    }        

    return (
        <div id="app">
            <div id="content" align="center">                
                <FormPayment onSubmit={handleSubmit}></FormPayment>
            </div>
        </div>
    );
}

export default FoodOrderPayment;