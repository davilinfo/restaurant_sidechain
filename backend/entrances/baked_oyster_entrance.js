const RestaurantFood = require( '../baseClasses/RestaurantFood');
const ResultSchema = require("../models/result");
const food = require("../models/food");

class BakedCheeseOysterEntrance extends RestaurantFood{

    constructor(){ 
        super(); 
        food.name= "oysters with baked cheese entrance";
        food.description= '12 fresh oysters with baked cheeses served in a plate';
        food.amount= 70;
        food.img= "images/oysters_gratines_aux_fromages.jpg";
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

module.exports = BakedCheeseOysterEntrance;