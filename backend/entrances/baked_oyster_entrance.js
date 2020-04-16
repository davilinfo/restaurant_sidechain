const RestaurantFood = require( '../baseClasses/RestaurantFood');
const ResultSchema = require("../models/result");
const food = require("../models/food");

class BakedCheeseOysterEntrance extends RestaurantFood{

    constructor(meat){ 
        super(); 

        food.name= "oysters with baked cheese entrance".concat( meat != null ? "+".concat( meat.getFood().name) : "" );
        food.description= '12 fresh oysters with baked cheeses served in a plate'.concat( meat != null ? "+".concat( meat.getFood().description) : "" );
        food.amount= 70 + (meat != null ? meat.getFood().amount * meat.getFood().discount : 0);
        food.discount = 1; // it means 0%
        food.img = "images/oysters_gratines_aux_fromages.jpg";
    }

    getFood(){
        return food;
    }     
}

module.exports = BakedCheeseOysterEntrance;