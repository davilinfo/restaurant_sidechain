const RestaurantFood = require( '../baseClasses/RestaurantFood');
const ResultSchema = require("../models/result");
const food = require("../models/food");

class VanillaIceCreamDessert extends RestaurantFood{            

    constructor(meat){ 
        super(); 
                
        food.name= "vanilla ice cream dessert".concat( meat != null ? "+".concat( meat.getFood().name) : "" );
        food.description= 'vanilla ice cream with strawberry syrup'.concat( meat != null ? "+".concat( meat.getFood().description) : "" );
        food.amount= 10 + (meat != null ? meat.getFood().amount * meat.getFood().discount : 0);
        food.discount = 1; // it means 0%         
        food.img= "images/vanilla_icecream_strawberry_syrup.jpg";
    }

    getFood(){
        return food;
    }    
}

module.exports = VanillaIceCreamDessert;