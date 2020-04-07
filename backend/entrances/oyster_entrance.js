const RestaurantFood = require( '../baseClasses/RestaurantFood');
const food = require("../models/food");
const ResultSchema = require("../models/result");

class OysterEntrance extends RestaurantFood{

    constructor(){ 
        super(); 
        food.name= "oysters";
        food.description= '12 fresh oysters served in a plate';
        food.amount= 50;
    }

    async registerPayment(passphrase, table, request_type, userid) {
                        
        food.table= table;
        food.request_type= request_type;
        food.user_id= userid;
        food.closed= true;                           

        ResultSchema.broadcastInfo = await super.commandFood(passphrase, food);
        ResultSchema.transaction = super.getTransaction();
        console.log(ResultSchema);

        return ResultSchema;
    }    
}

module.exports = OysterEntrance;