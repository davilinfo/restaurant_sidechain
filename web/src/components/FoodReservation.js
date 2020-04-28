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
                {foodRequest.data.status}
                <br />
                Transaction id: {foodRequest.data.response.data.length > 0 ? foodRequest.data.response.data[0].id : ""}                
                <br/>
                Payer LSK address: {foodRequest.data.response.data.length > 0 ? foodRequest.data.response.data[0].senderId : ""}
                <br/>
                Restaurant LSK address: {foodRequest.data.response.data.length > 0 ? foodRequest.data.response.data[0].recipientId : ""}
                <br/>
                Food name: {foodRequest.data.response.data.length > 0 ? foodRequest.data.response.data[0].asset.name : ""}
                <br/>
                Amount: {foodRequest.data.response.data.length > 0 ? foodRequest.data.response.data[0].amount : ""}
                <br/>
                Phone: {foodRequest.data.response.data.length > 0 ? foodRequest.data.response.data[0].asset.phone : ""}
                <br/>
                Delivery address: {foodRequest.data.response.data.length > 0 ? foodRequest.data.response.data[0].asset.deliveryaddress : ""}
                <br/>
                User: {foodRequest.data.response.data.length > 0 ? foodRequest.data.response.data[0].asset.username : ""}
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