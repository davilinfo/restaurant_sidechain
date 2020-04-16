const RestaurantFood = require( '../baseClasses/RestaurantFood');
const ResultSchema = require("../models/result");
const food = require("../models/food");

class OysterEntrance extends RestaurantFood{

    constructor(meat){ 
        super(); 
        food.name= "oysters".concat( meat != null ? "+".concat( meat.getFood().name) : "" );
        food.description= '12 fresh oysters served in a plate'.concat( meat != null ? "+".concat( meat.getFood().description) : "" );
        food.amount= 50 + (meat != null ? meat.getFood().amount * meat.getFood().discount : 0);
        food.discount = 1; // it means 0%
        food.img= "images/ostras-in-natura.jpg";
    }

    getFood(){
        return food;
    }        
}

module.exports = OysterEntrance;