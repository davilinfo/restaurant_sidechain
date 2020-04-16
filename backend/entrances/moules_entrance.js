const RestaurantFood = require( '../baseClasses/RestaurantFood');
const ResultSchema = require("../models/result");
const food = require("../models/food");

class MoulesEntrance extends RestaurantFood{

    constructor(meat){ 
        super(); 

        food.name= "cooked moules".concat( meat != null ? "+".concat( meat.getFood().name) : "" );
        food.description= '12 fresh moules à la creme'.concat( meat != null ? "+".concat( meat.getFood().description) : "" );
        food.amount= 40 + (meat != null ? meat.getFood().amount * meat.getFood().discount : 0);
        food.discount = 1; // it means 0%
        food.img = "images/moulmari.jpg";
    }

    getFood(){
        return food;
    }     
}

module.exports = MoulesEntrance;