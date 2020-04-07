const RestaurantFood = require( '../baseClasses/RestaurantFood');
const food = require("../models/food");

class VanillaIceCreamDessert extends RestaurantFood{            

    constructor(){ 
        super(); 
        
        food.name= "vanilla ice cream dessert";
        food.description= 'vanilla ice cream with strawberry syrup';
        food.amount= 10;                
                       
        console.log("Food: ", food);
    }

    Food(){
        return food;
    }

    registerPayment(passphrase, table, request_type, userid) {                              

        food.table= table;
        food.request_type= request_type;
        food.user_id= userid;
        food.closed= true;

        return super.commandFood(passphrase, food);
    }
}

module.exports = VanillaIceCreamDessert;