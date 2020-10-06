import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import api from '../services/api';
import FormPayment from './FormPayment';
import '../styles.css';

function FoodOrderPayment(props){        
    var querystring = document.location.href.split("?")[1];         

    var [order, setOrder] = useState([]);                    
    
    /*this function should be uncommented if is desired to sign transaction at frontend*/
    async function handleSubmit(data){                                                          
               
        order = await api.post('/payment', {transaction: data.txFood, networkid: 'identifier'});
        console.log(order);
        
        setOrder(order);                  
        
        if (order.data.status === "Transaction result"){

            const transaction_result = (
                <div className="recipes_topic">                    
                    {order.data.status}
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
        }else{
            const transaction_result = (
                <div className="recipes_topic">                    
                    Transaction result: {order.data.status}                                  
                    <div className="clear"></div>
                </div>
            );
            
            ReactDOM.render(transaction_result, document.getElementById('content'));  
        }
    }           

    return (
        <div id="app">
            <div id="content" align="center">                
                <FormPayment onSubmit={handleSubmit} orderstring={querystring}></FormPayment>
            </div>
        </div>
    );
}

export default FoodOrderPayment;