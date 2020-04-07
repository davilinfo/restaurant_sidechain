const RestaurantFood = require( '../baseClasses/RestaurantFood');
const food = require("../models/food");

class OysterEntrance extends RestaurantFood{

    constructor(){ 
        super(); 
        food.name= "oysters";
        food.description= '12 fresh oysters served in a plate';
        food.amount= 50;
    }

    registerPayment(passphrase, table, request_type, userid) {
                        
        food.table= table;
        food.request_type= request_type;
        food.user_id= userid;
        food.closed= true;
                       
        console.log("Food: ", food);

        return super.commandFood(passphrase, food);
    }
}

module.exports = OysterEntrance;