import React from 'react';

import '../styles.css';

function FoodItemDetail(props){
    const { food } = props;

    return (
        <>
        <p className="headline2">{food.food}</p>
        <div className="recipes_topic"> 
            <img src={food.img} width="72" height="72" alt="" />
            <p><span className="headline">{food.food}</span> <br />
            {food.description}</p>
            <div className="clear"></div>
        </div>
        </>
    );
}

export default FoodItemDetail;