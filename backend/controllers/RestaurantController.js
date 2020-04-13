const OysterEntrance = require ('../entrances/oyster_entrance');
const MoulesEntrance = require ('../entrances/moules_entrance');
const VanillaIceCreamDessert = require ('../dessert/vanillaicecream_dessert');
const RibsOnTheBarbecueMenu = require ('../menu/ribsonthebarbecue_menu');
const BakedCheeseOysterEntrance = require('../entrances/baked_oyster_entrance');
const Refund = require('../baseClasses/RefundRestaurant');
const ResultSchema = require("../models/result");
const User = require ('../models/user');
const { food_type } = require ('../foodTypes/food_types.json');


module.exports = {
    async index(request, response){
        response.setHeader('Access-Control-Allow-Origin', '*');
        console.log(food_type);
        return response.json({
            status: "ok",
            result: food_type
        })
    },

    async foodDetail(request, response){
        response.setHeader('Access-Control-Allow-Origin', '*');
        var rsp = null;
        var ID = request.params.id;
        console.log(ID);
        if (ID==1) {                      
            rsp = new OysterEntrance().getFood();                                     
        }else if (ID==2) {                                       
            rsp = new MoulesEntrance().getFood();
        }else if (ID==3) {
            rsp =  new VanillaIceCreamDessert().getFood();
        }else if (ID==4) {           
            rsp = new RibsOnTheBarbecueMenu(new VanillaIceCreamDessert()).getFood();
        }else if (ID==5) {
            rsp = new BakedCheeseOysterEntrance().getFood();
        }else{
            response.json({
                status: "invalid request",
                response: null
            }) 
        }
        console.log(rsp);
        response.json({
            status: "ok",
            response: rsp
        })
    },

    async getAccount(request, response){
        response.setHeader('Access-Control-Allow-Origin', '*');
        var restaurant = new Refund();
        const { passphrase } = request.body;
        return response.json({ response: await restaurant.getAccount(passphrase)});
    },

    async refund(request, response) {
        response.setHeader('Access-Control-Allow-Origin', '*');
        
        const { transactionId, amount, recipientAddress, password } = request.body;        

        var result = null;
        if (password == "pocFoodRestaurant"){
            const refund = new Refund();
            ResultSchema.broadcastInfo = await refund.commandRefund(transactionId, amount, recipientAddress);
            ResultSchema.transaction = await refund.getTransaction();

            return response.json({ status: "transaction completed", response: ResultSchema});
        }else{
            return response.json({
                status: "wrong password",
                response: null
            });
        }
    },

    async store(request, response){
        response.setHeader('Access-Control-Allow-Origin', '*');

        const { request_type, passphrase, userid, username, table, phone, deliveryaddress } = request.body;        

        var result = null;        
        console.log("registering payment");
        console.log("request ".concat( request_type));
        console.log("username ".concat( username));        
        console.log("userid ".concat( userid));
        console.log("phone ".concat( phone));
        console.log("deliveryaddress ".concat( deliveryaddress));
        
        switch (request_type.toString()) {
            case "1":
                const entrance1 = new OysterEntrance();           
                result = await entrance1.registerPayment(passphrase, table, request_type, username, phone, deliveryaddress);
                break;
        
            case "2":
                const entrance2 = new MoulesEntrance();           
                result = await entrance2.registerPayment(passphrase, table, request_type, username, phone, deliveryaddress);
                break;

            case "3":
                const dessert3 = new VanillaIceCreamDessert();           
                result = await dessert3.registerPayment(passphrase, table, request_type, username, phone, deliveryaddress);
                break;
            
            case "4":                
                const dessert = new VanillaIceCreamDessert();                
                /* Decorator design pattern. Menu applies discount in desserts */
                const menu1 = new RibsOnTheBarbecueMenu(dessert);           
                result = await menu1.registerPayment(passphrase, table, request_type, username, phone, deliveryaddress);
                break;
            
            case "5":
                const entrance3 = new BakedCheeseOysterEntrance();
                resut = await entrance3.registerPayment(passphrase, table, request_type, username, phone, deliveryaddress);
                break;

            default:
                return response.json({
                    status: "invalid request type",
                    response: null
                })                
        }
        
        return response.json({
            status: "transaction completed",
            response: result
        });        
    },    
}