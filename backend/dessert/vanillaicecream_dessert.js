const RestaurantFood = require( '../baseClasses/RestaurantFood');
const ResultSchema = require("../models/result");
const food = require("../models/food");

class VanillaIceCreamDessert extends RestaurantFood{            

    constructor(){ 
        super(); 
                
        food.name= "vanilla ice cream dessert";
        food.description= 'vanilla ice cream with strawberry syrup';
        food.amount= 10;  
        food.img= "images/vanilla_icecream_strawberry_syrup.jpg";
    }

    getFood(){
        return food;
    }    
}

module.exports = VanillaIceCreamDessert;