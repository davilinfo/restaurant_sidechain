import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactQrCode from 'qrcode-react';
import api from '../services/api';
import FormOrderQrCode from './FormOrderQrCode';
import '../styles.css';

function FoodOrderQrCode(props){        
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

        order = await api.post('/storeQrCode', data);   
        console.log(order.data.response);
        setOrder(order);

        const transaction_result = (
            <div className="recipes_topic">    
                <img src={`../${food.img}`} width="200" height="200" alt="" /> 
                <br />
                <p>
                Food description:  {food.description} 
                </p>
                <p>
                Amount: {food.amount}
                </p>
                <p>
                {order.data.status}                    
                <br/>
                <label>Point the camera of your phone to the qr code. Once loaded proceed with the payment</label>
                <br/>
                <ReactQrCode value={order.data.response}/>
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
                    <p style={{width: 300}}>
                    Food description: {food.description}
                    </p>
                    <br/>
                    Amount: {food.amount}
                    </p>
                    <div className="clear"></div>                    
                </div>
                <div style={{backgroundColor: '#FFFFFF', width: 150, height: 150}}>
                    <div style={{marginTop: 15}}>
                        <FormOrderQrCode onSubmit={handleSubmit}></FormOrderQrCode>
                    </div>
                </div>
            </div>            
        </div>
    );
}

export default FoodOrderQrCode;