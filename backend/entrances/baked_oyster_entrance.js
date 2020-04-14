const RestaurantFood = require( '../baseClasses/RestaurantFood');
const ResultSchema = require("../models/result");
const food = require("../models/food");

class BakedCheeseOysterEntrance extends RestaurantFood{

    constructor(){ 
        super(); 

        food.name= "oysters with baked cheese entrance";
        food.description= '12 fresh oysters with baked cheeses served in a plate';
        food.amount= 70;
        food.img = "images/oysters_gratines_aux_fromages.jpg";
    }

    getFood(){
        return food;
    }     
}

module.exports = BakedCheeseOysterEntrance;