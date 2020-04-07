const RestaurantFood = require( '../baseClasses/RestaurantFood');
const food = require("../models/food");

class MoulesEntrance extends RestaurantFood{

    constructor(){ 
        super(); 

        food.name= "cooked moules";
        food.description= '12 fresh moules à la creme';
        food.amount= 40;
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

module.exports = MoulesEntrance;