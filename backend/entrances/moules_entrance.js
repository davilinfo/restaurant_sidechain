const RestaurantFood = require( '../baseClasses/RestaurantFood');
const ResultSchema = require("../models/result");
const food = require("../models/food");

class MoulesEntrance extends RestaurantFood{

    constructor(){ 
        super(); 

        food.name= "cooked moules";
        food.description= '12 fresh moules à la creme';
        food.amount= 40;
        food.img = "images/moulmari.jpg";
    }

    getFood(){
        return food;
    }     
}

module.exports = MoulesEntrance;