import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import api from '../services/api';
import FormPayment from './FormPayment';
import '../styles.css';

function FoodOrderPayment(props){                   
    
    var [order, setOrder] = useState([]);                    

    async function handleSubmit(data){      
        
        var food = new FormData();
        var orderstring = props.orderstring;
        if (orderstring !== null && orderstring !== undefined){    
            orderstring = orderstring.split("&");
                
            food.append("recipientAddress", orderstring[0].split('=')[1]);
            food.append("amount", orderstring[1].split('=')[1]);
            food.append("name", orderstring[2].split('=')[1]);
            food.append("request_type", orderstring[3].split('=')[1]);
            food.append("timestamp", orderstring[4].split('=')[1]);
            food.append("username", orderstring[5].split('=')[1]);
            food.append("phone", orderstring[6].split('=')[1]);
            food.append("deliveryaddress", orderstring[7].split('=')[1]);
            food.append("table", 1);
            food.append("encryptedPassphrase", data);            
        }                                                 

        order = await api.post('/userRequest', food );
        setOrder(order);                   

        const transaction_result = (
            <div className="recipes_topic">                    
                Transaction result: {order.data.status}
                <br />
                Transaction id: {order.data.response.transaction.id}
                <br/>
                Paid Amount: LSK {order.data.response.transaction.amount/100000000}
                <br/>
                Payer LSK address: {order.data.response.transaction.senderId}
                <br/>
                Restaurant LSK address: {order.data.response.transaction.recipientId}
                <br/>
                Broadcast info: {order.data.response.broadcastInfo.data.message}                
                <div className="clear"></div>
            </div>
        );

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