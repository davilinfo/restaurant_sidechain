const RestaurantFood = require( '../baseClasses/RestaurantFood');
const food = require("../models/food");
const ResultSchema = require("../models/result");

class VanillaIceCreamDessert extends RestaurantFood{            

    constructor(){ 
        super(); 
        
        food.name= "vanilla ice cream dessert";
        food.description= 'vanilla ice cream with strawberry syrup';
        food.amount= 10;                
                       
        console.log("Food: ", food);
    }

    Food(){
        return food;
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

module.exports = VanillaIceCreamDessert;