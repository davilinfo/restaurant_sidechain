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

    async registerPayment(passphrase, table, request_type, username, phone, deliveryaddress) {
                        
        food.table= table;
        food.request_type= request_type;
        food.username= username;        
        food.phone= phone;
        food.deliveryaddress= deliveryaddress;
        food.closed= true;                           

        ResultSchema.broadcastInfo = await super.commandFood(passphrase, food);
        ResultSchema.transaction = await super.getTransaction();
        console.log(ResultSchema);

        return ResultSchema;
    }    
}

module.exports = OysterEntrance;