import React, { useState, useEffect } from 'react';
import api from '../services/api';
import FormOrder from './FormOrder';

import '../styles.css';

function FoodOrder(props){        
    var foodType = document.location.pathname.split("/")[2];
    console.log(foodType);

    var [food, setFood] = useState([]);
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

        const order = await api.post('/userRequest', data);
        var result = order.data.response;              
        alert(result.transaction.id);
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