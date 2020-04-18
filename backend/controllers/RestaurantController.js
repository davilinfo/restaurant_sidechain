const OysterEntrance = require ('../entrances/oyster_entrance');
const MoulesEntrance = require ('../entrances/moules_entrance');
const VanillaIceCreamDessert = require ('../dessert/vanillaicecream_dessert');
const RibsOnTheBarbecueMenu = require ('../menu/ribsonthebarbecue_menu');
const BakedCheeseOysterEntrance = require('../entrances/baked_oyster_entrance');
const Refund = require('../baseClasses/RefundRestaurant');
const { food_type } = require ('../foodTypes/food_types.json');

/* Attention: please, keep the food describe in food_types.json equivalent on each RestaurantFood class*/

function generateDish(foodType){
    switch (foodType.toString()) {
        case "1":
            return new OysterEntrance();
            break;
    
        case "2":
            return new MoulesEntrance();                       
            break;

        case "3":
            return new VanillaIceCreamDessert();
            break;
        
        case "4": /* Decorator design pattern. Menu applies discount in desserts */            
            return new RibsOnTheBarbecueMenu(new VanillaIceCreamDessert());
            break;
        
        case "5":
            return new BakedCheeseOysterEntrance();            
            break;
        
        case "6": /* Decorator design pattern. Full menu with entrance, principal and dessert. Menu applies discount*/                           
            const ribsmenu = new RibsOnTheBarbecueMenu(new VanillaIceCreamDessert());
            ribsmenu.getFood().discount = 0.6;
            const menu = new BakedCheeseOysterEntrance(ribsmenu);            
            menu.getFood().img = "images/baked-oysters-plus-ribs.jpg";
            return menu;

            break;

        default:
            return "invalid request type";
        }
}

module.exports = {
    /* 
    method type: Get
    Index method that retrieves all food types listed on /foodTypes/food_types.json 
    */ 
    async index(request, response){
        response.setHeader('Access-Control-Allow-Origin', '*');
        console.log(food_type);
        return response.json({
            status: "ok",
            result: food_type
        })
    },

    /* 
    method type: Get
    Returns the food detailed from the respective food type supplied in the URL
    */
    async foodDetail(request, response){
        response.setHeader('Access-Control-Allow-Origin', '*');        
        var ID = request.params.id;
        const isInvalidValidRequest = isNaN(ID) || ID < 0 || ID > 7;
        var rsp = generateDish(ID).getFood();
        console.log(ID);        
        console.log(rsp);

        response.json({
            status: isInvalidValidRequest ? "invalid request" : "ok",
            response: rsp
        })
    },

    /* 
    method type: Get
    Returns the account detail from the respective passphrase supplied in the URL
    */
    async getAccount(request, response){
        response.setHeader('Access-Control-Allow-Origin', '*');
        var restaurant = new Refund();
        const { passphrase } = request.body;
        return response.json({ response: await restaurant.getAccount(passphrase)});
    },

    /* 
    method type: Post
    Returns transaction detail related to the refund inforamtion supplied
    */
    async refund(request, response) {
        response.setHeader('Access-Control-Allow-Origin', '*');
        
        const { transactionId, amount, recipientAddress, password } = request.body;        

        var result = null;
        if (password == "pocFoodRestaurant"){
            const refund = new Refund();
            result = await refund.commandRefund(transactionId, amount, recipientAddress);            

            return response.json({ status: "transaction result", response: result});
        }else{
            return response.json({
                status: "wrong password",
                response: null
            });
        }
    },

    /*
    method type: Post
    Returns transaction detail related to food requested
    */
    async store(request, response){
        response.setHeader('Access-Control-Allow-Origin', '*');

        const { request_type, passphrase, username, table, phone, deliveryaddress } = request.body;        

        var result = null;
        const isInvalidValidRequest = isNaN(request_type) || request_type < 0 || request_type > 7;
        console.log("registering payment");        
        
        const meat = generateDish(request_type);           
        result = await meat.commandFood(passphrase, meat.getFood(), table, request_type, username, phone, deliveryaddress);                           
        
        return response.json({
            status: isInvalidValidRequest ? "invalid request type" : "transaction result",
            response: isInvalidValidRequest ? null : result
        });        
    },    
}