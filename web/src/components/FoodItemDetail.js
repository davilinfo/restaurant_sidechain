import React from 'react';
import { Link, Route } from 'react-router-dom';
import FoodOrderQrCode from './FoodOrderQrCode';

import '../styles.css';

function FoodItemDetail(props){
    const { food } = props;

    return (        
        <>            
            <Link exact to={`/FoodOrderQrCode/${food.type}`}>
                <div className="recipes_topic"> 
                    <img src={food.img} width="72" height="72" alt="" />
                    <br></br>
                    <span className="headline">{food.food}</span> <br />
                    {food.description}
                    <div className="clear"></div>
                </div>
            </Link>
            <Route path={`/FoodOrderQrCode/${food.type}`} key={food.type} component={FoodOrderQrCode}></Route>
       </>                         
    );
}


export default FoodItemDetail;