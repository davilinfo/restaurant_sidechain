import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import FormSearch from './FormSearch';
import '../styles.css';
const transactions = require("@liskhq/lisk-transactions");

function FoodSearch(props){                   
    var [foodRequest, setFoodRequest] = useState([]);         
    var [deliveryAddress, setDeliveryAddress] = useState('');
    var [username, setUsername] = useState('');
    var [observation, setObservation] = useState('');

    async function handleSubmit(data){                
        
        foodRequest = data.result.foodRequest;        
        deliveryAddress = data.result.deliveryAddress;
        username = data.result.user;
        observation= data.result.observation;
        
        setFoodRequest(foodRequest);            
        setDeliveryAddress(deliveryAddress);
        setObservation(observation);
        setUsername(username);

        const transaction_result = (
            <div className="recipes_topic">                    
                {foodRequest.data.status}
                <br />
                Transaction id: {foodRequest.data.response.data.length > 0 ? foodRequest.data.response.data[0].id : ""}                
                <br/>
                Payer LSK address: {foodRequest.data.response.data.length > 0 ? foodRequest.data.response.data[0].senderId : ""}
                <br/>
                Restaurant LSK address: {foodRequest.data.response.data.length > 0 ? foodRequest.data.response.data[0].asset.recipientId : ""}
                <br/>
                Food name: {foodRequest.data.response.data.length > 0 ? foodRequest.data.response.data[0].asset.name : ""}
                <br/>
                Amount: LSK {foodRequest.data.response.data.length > 0 ? transactions.utils.convertBeddowsToLSK(foodRequest.data.response.data[0].asset.amount) : 0}                
                <br/>
                Delivery address: {deliveryAddress}
                <br/>
                User: {username}
                <br/>
                Observation: {observation}
                <div className="clear"></div>
            </div>
        );

        ReactDOM.render(transaction_result, document.getElementById('content'));        
    }        

    return (
        <div id="app">
            <div id="content" align="center">                
                <FormSearch onSubmit={handleSubmit}></FormSearch>                
            </div>
        </div>
    );
}

export default FoodSearch;