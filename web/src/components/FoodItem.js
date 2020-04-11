import React from 'react';

import '../styles.css';

function FoodItem(props){
    const { food } = props;

    return (
        <li> {food.food} </li>       
    );
}

export default FoodItem;