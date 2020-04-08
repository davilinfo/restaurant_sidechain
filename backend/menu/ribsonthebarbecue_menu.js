const RestaurantFood = require( '../baseClasses/RestaurantFood');
const food = require("../models/food");
const ResultSchema = require("../models/result");

class RibsOnTheBarbecueMenu extends RestaurantFood{
    
    constructor(dessert){ 
        super();                 
        food.name= "Ribs on the barbecue".concat(" + ").concat(dessert.Food().name);
        food.description= '10 baked ribs on the barbecue sauce'.concat(" + ").concat(dessert.Food().description);
        food.amount= 50 + (dessert.Food().amount * 0.3);
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

module.exports = RibsOnTheBarbecueMenu;