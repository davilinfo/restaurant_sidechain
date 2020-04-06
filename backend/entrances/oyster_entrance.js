const RestaurantFood = require( '../baseClasses/RestaurantFood');
const Food = require("../models/food");

class OysterEntrance {

    constructor(){}

    registerPayment(passphrase, table, request_type, userid) {

        //replace later with FoodSchema
        var food = {
            name: "oysters",
            description: '12 fresh oysters served in a plate',
            amount: 50,
            table: table,
            request_type: request_type,
            user_id: userid,
            close: true
        }                   
        
        console.log(food);
        return RestaurantFood.commandFood(passphrase, food);
    }
}

module.exports = OysterEntrance;