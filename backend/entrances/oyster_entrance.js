const RestaurantFood = require( '../baseClasses/RestaurantFood');
const ResultSchema = require("../models/result");
const food = require("../models/food");

class OysterEntrance extends RestaurantFood{

    constructor(){ 
        super(); 
        food.name= "oysters";
        food.description= '12 fresh oysters served in a plate';
        food.amount= 50;
        food.img= "images/ostras-in-natura.jpg";
    }

    getFood(){
        return food;
    }        
}

module.exports = OysterEntrance;