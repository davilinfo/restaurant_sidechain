import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import api from '../services/api';
import FormOrder from './FormOrder';

import '../styles.css';

function FoodOrder(props){        
    var foodType = document.location.pathname.split("/")[2];    

    var [food, setFood] = useState([]);
    var [order, setOrder] = useState([]);        

    useEffect (() => {
      async function loadFood(){
        console.log("loading food");                    
        const response = await api.get('/foodDetail/'.concat(foodType));
        food = response.data.response;
        setFood(food);        
      }
        
      loadFood();             
    }, []);    

    async function handleSubmit(data){
        
        data.request_type = foodType;
        data.userid = 1;                

        order = await api.post('/userRequest', data);   
        setOrder(order);     
        
        const transaction_result = (
            <div className="recipes_topic">    
                <img src={`../${food.img}`} width="200" height="200" alt="" /> 
                <br />
                Food description: {food.description}                
                <p>
                Transaction result: {order.data.status}
                <br />
                Transaction id: {order.data.response.transaction.id}
                <br/>
                Paid Amount: {order.data.response.transaction.amount}
                <br/>
                Payer address: {order.data.response.transaction.senderId}
                <br/>
                Restaurant address: {order.data.response.transaction.recipientId}
                <br/>
                Broadcast info: {order.data.response.broadcastInfo.data.message}
                </p>
                <div className="clear"></div>
            </div>
        );

        ReactDOM.render(transaction_result, document.getElementById('content'));        
    }        

    return (
        <div id="app">
            <div id="content" align="center">
                <img src={`../${food.img}`} width="200" height="200" alt="" />
                <div className="recipes_topic">                     
                    <p>
                    {food.food}                    
                    <br />
                    Food description: {food.description}
                    <br/>
                    Amount: {food.amount}
                    </p>
                    <div className="clear"></div>
                </div>
                <FormOrder onSubmit={handleSubmit}></FormOrder>                
            </div>            
        </div>
    );
}

export default FoodOrder;