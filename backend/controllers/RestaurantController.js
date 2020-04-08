const OysterEntrance = require ('../entrances/oyster_entrance');
const MoulesEntrance = require ('../entrances/moules_entrance');
const VanillaIceCreamDessert = require ('../dessert/vanillaicecream_dessert');
const RibsOnTheBarbecueMenu = require ('../menu/ribsonthebarbecue_menu');
const User = require ('../models/user');
const { food_type } = require ('../foodTypes/food_types.json');


module.exports = {
    async index(request, response){
        console.log(food_type);
        return response.json({
            status: "ok",
            result: food_type
        })
    },

    async userRequest(request, response, userid) {
        /*to be developed*/
        return response.json({
            status: "ok",
            result: null
        })
    },

    async store(request, response){
        const { request_type, passphrase, userid, username, table } = request.body;        

        var result = null;        
        console.log("registering payment");
        switch (request_type) {
            case 1:
                const entrance1 = new OysterEntrance();           
                result = await entrance1.registerPayment(passphrase, table, request_type, userid);
                break;
        
            case 2:
                const entrance2 = new MoulesEntrance();           
                result = await entrance2.registerPayment(passphrase, table, request_type, userid);
                break;

            case 3:
                const dessert3 = new VanillaIceCreamDessert();           
                result = await dessert3.registerPayment(passphrase, table, request_type, userid);
                break;
            
            case 4:                
                const dessert = new VanillaIceCreamDessert();                
                /* Decorator design pattern. Menu applies discount in desserts */
                const menu1 = new RibsOnTheBarbecueMenu(dessert);           
                result = await menu1.registerPayment(passphrase, table, request_type, userid);
                break;

            default:
                return response.json({
                    status: "invalid request type",
                    response: null
                })
                break;
        }

        return response.json({
            status: "transaction completed",
            response: result
        });        
    },    
}