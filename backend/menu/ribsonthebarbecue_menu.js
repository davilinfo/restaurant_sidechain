const RestaurantFood = require( '../baseClasses/RestaurantFood');
const ResultSchema = require("../models/result");
const food = require("../models/food");

class RibsOnTheBarbecueMenu extends RestaurantFood{
    
    constructor(dessert){ 
        super();                 
        food.name= "Ribs on the barbecue".concat(" + ").concat(dessert.getFood().name);
        food.description= '10 baked ribs on the barbecue sauce'.concat(" + ").concat(dessert.getFood().description);
        food.amount= 50 + (dessert.getFood().amount * 0.3);
        food.img=  "images/ribs_on_the_barbie.jpg";
    }

    getFood(){
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

module.exports = RibsOnTheBarbecueMenu;