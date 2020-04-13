const RestaurantFood = require( '../baseClasses/RestaurantFood');
const ResultSchema = require("../models/result");
const food = require("../models/food");

class VanillaIceCreamDessert extends RestaurantFood{            

    constructor(){ 
        super(); 
                
        food.name= "vanilla ice cream dessert";
        food.description= 'vanilla ice cream with strawberry syrup';
        food.amount= 10;  
        food.img= "images/vanilla_icecream_strawberry_syrup.jpg";
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

module.exports = VanillaIceCreamDessert;