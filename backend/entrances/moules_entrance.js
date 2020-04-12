const RestaurantFood = require( '../baseClasses/RestaurantFood');
const ResultSchema = require("../models/result");
const food = require("../models/food");

class MoulesEntrance extends RestaurantFood{

    constructor(){ 
        super(); 

        food.name= "cooked moules";
        food.description= '12 fresh moules à la creme';
        food.amount= 40;
        food.img = "images/moulmari.jpg";
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

module.exports = MoulesEntrance;