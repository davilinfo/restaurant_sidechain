import React from 'react';
import { Link, Route } from 'react-router-dom';
import FoodOrder from './FoodOrder';

import '../styles.css';

function FoodItemDetail(props){
    const { food } = props;

    return (        
        <>
            

            <Link exact to={`/FoodOrder/${food.type}`}>
                <div className="recipes_topic"> 
                    <img src={food.img} width="72" height="72" alt="" />
                    <p><span className="headline">{food.food}</span> <br />
                    {food.description}</p>
                    <div className="clear"></div>
                </div>
            </Link>
            <Route path={`/FoodOrder/${food.type}`} key={food.type} component={FoodOrder}></Route>
       </>                         
    );
}


export default FoodItemDetail;