const RestaurantFood = require('../baseClasses/RestaurantFood');
const Refund = require('../baseClasses/RefundRestaurant');
const transactions = require("@liskhq/lisk-transactions");
const cryptography = require('@liskhq/lisk-cryptography');
const RestaurantInfo = require('../baseClasses/RestaurantInfo');

/* Attention: please, perform a MenuTransaction to establish a menu for this restaurant*/

    var generateDish = async (foodType) => {        

        var restaurant = new RestaurantFood();
        const restaurantAddress = RestaurantInfo.getRestaurantAddress();
        const options = { "type": 800, "recipientId": restaurantAddress, "senderId": restaurantAddress,
        "sort": 'timestamp:desc', "limit": 1 };
        var itemIndex = 0;
        var food = require("../models/food");   
        
        const result = await restaurant.getTransactionById(options);
        
        itemIndex = result.data.length -1;
        
        if (result.data[itemIndex] !== undefined) {                             
            
            for (var index = 0; index < result.data[itemIndex].asset.items.length; index++) {
                if (result.data[itemIndex].asset.items[index].type == parseInt(foodType)) {
                    food.name = result.data[itemIndex].asset.items[index].name;
                    food.description = result.data[itemIndex].asset.items[index].description;
                    food.amount = result.data[itemIndex].asset.items[index].price;
                    food.discount = result.data[itemIndex].asset.items[index].discount;
                    food.img = result.data[itemIndex].asset.items[index].img;
                    food.request_type = result.data[itemIndex].asset.items[index].type;
                    food.getTimestamp = function() {
                        return restaurant.getTimestamp();
                    }

                    console.log("food detail: ".concat(food));
                    return food;  
                }
            }
        }
        return "invalid request";        
    }

module.exports = {    
    /* 
    method type: Get
    Index method that retrieves menu from the latest MenuTransaction performed for this restaurant 
    to perform a MenuTransaction please read the readme file on the backend folder, there is a dish1_commands folder with a menu_transaction.request.js file
    */ 
    async index(request, response){
        response.setHeader('Access-Control-Allow-Origin', '*');

        var restaurant = new RestaurantFood();
        const restaurantAddress = RestaurantInfo.getRestaurantAddress();
        const options = { "type": 800, "recipientId": restaurantAddress, "senderId": restaurantAddress,
            "sort": 'timestamp:desc', "limit": 1 };        
        var result = await restaurant.getTransactionById(options);
        var itemIndex = result.data.length-1;     

        if (result.data[itemIndex] !== undefined){
            console.log(result.data[itemIndex].asset.items);            

            return response.json({
                status: "ok",
                result: result.data[itemIndex].asset.items
            })
        }
        
        return response.json({
            status: "error",
            result: null
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
        var rsp = await generateDish(ID);        
        console.log(ID);        
        console.log(rsp);

        response.json({
            status: isInvalidValidRequest ? "invalid request" : "ok",
            response: rsp
        })
    },

    /*
    method type: Post
    Returns transaction detail by transaction id
    */
    async getTransactionById(request, response){
        response.setHeader('Access-Control-Allow-Origin', '*');

        const { transactionId, phone, address } = request.body;
        const password = 'luxuryRestaurant';

        var restaurant = new RestaurantFood();
        const restaurantAddress = RestaurantInfo.getRestaurantAddress();
        const options = { "type": 820, "id": transactionId, "limit": 1, "recipientId": restaurantAddress, "senderId": address };        
        var result = await restaurant.getTransactionById(options);        
                
        if (result.data[0] !== undefined){
            const transactionPhone = result.data[0].asset.clientNonce !== undefined ?  result.data[0].asset.phone : cryptography.decryptPassphraseWithPassword(result.data[0].asset.phone, password); 
            if (phone === transactionPhone){
                result.data[0].asset.username = result.data[0].asset.clientNonce !== undefined ?  result.data[0].asset.username : cryptography.decryptPassphraseWithPassword(result.data[0].asset.username, password);
                result.data[0].asset.phone = transactionPhone;
                result.data[0].asset.deliveryaddress = result.data[0].asset.clientNonce !== undefined ? result.data[0].asset.deliveryaddress : cryptography.decryptPassphraseWithPassword(result.data[0].asset.deliveryaddress, password);                
            }else{
                result.data[0].asset.username = "";
                result.data[0].asset.phone = "";
                result.data[0].asset.deliveryaddress = "";
            }
        }

        return response.json({ status: "Transaction result", response: result});
    },

    /* 
    method type: Post
    Returns transaction detail related to the refund information supplied
    */
    async refund(request, response) {
        response.setHeader('Access-Control-Allow-Origin', '*');
        
        const { transactionId, amount, recipientAddress, password } = request.body;        

        var result = null;
        if (password == "pocFoodRestaurant"){
            const refund = new Refund();
            result = await refund.commandRefund(transactionId, amount, recipientAddress);                        

            return response.json({ status: "Transaction result", response: result});
        }else{
            return response.json({
                status: "validation error",
                response: "wrong password"
            });
        }
    },

    /*
    method type: Post
    Returns transaction detail related to food requested
    */
    async store(request, response){
        response.setHeader('Access-Control-Allow-Origin', '*');

        const { request_type, encryptedPassphrase, username, table, phone, deliveryaddress } = request.body;        
        const password = 'luxuryRestaurant';
        
        const decryptedPassphrase = cryptography.decryptPassphraseWithPassword(encryptedPassphrase, password);        

        var result = null;
        const isInvalidValidRequest = isNaN(request_type) || request_type < 0 || request_type > 7;
        console.log("registering payment");        
        
        const meat = await generateDish(request_type);           
        result = await meat.commandFood(decryptedPassphrase, meat, table, request_type, cryptography.encryptPassphraseWithPassword(username, password), cryptography.encryptPassphraseWithPassword(phone, password), cryptography.encryptPassphraseWithPassword(deliveryaddress, password));
        
        return response.json({
            status: isInvalidValidRequest ? "Invalid request type" : "Transaction result",
            response: isInvalidValidRequest ? null : result
        });        
    },    
    
    async storeQrCodeUrlRestaurant(request, response){
        response.setHeader('Access-Control-Allow-Origin', '*');
        const { request_type, username, phone, deliveryaddress, observation } = request.body;            
        
        var table = 1;
        const meat = await generateDish(request_type);
        const address = RestaurantInfo.getRestaurantAddress();                        
        const amount = `${transactions.utils.convertLSKToBeddows(meat.amount.toString())}`.toString(); 

        var result = "food://wallet?recipient=".concat(address)
            .concat("&amount=").concat(amount)
            .concat("&food=").concat(meat.name)
            .concat("&foodtype=").concat(request_type.toString())
            .concat("&timestamp=").concat(meat.getTimestamp())
            .concat("&username=").concat(username)
            .concat("&phone=").concat(phone)
            .concat("&deliveryaddress=").concat(deliveryaddress)
            .concat("&observation=").concat(observation);                

        return response.json({ status: "Waiting payment", response: result});
    },

    async storeQrCodeUrlRestaurantAtPlace(request, response){
        response.setHeader('Access-Control-Allow-Origin', '*');
        const { request_type, username, phone, deliveryaddress } = request.body;            

        const meat = await generateDish(request_type);
        const address = RestaurantInfo.getRestaurantAddress();                        
        const amount = `${transactions.utils.convertLSKToBeddows(meat.amount.toString())}`.toString();
                
        var result = null;
        result = "food://wallet?recipient=".concat(address)
            .concat("&amount=").concat(amount);

        return response.json({ status: "Waiting payment", response: result});
    },

    async storePayment(request, response){
        response.setHeader('Access-Control-Allow-Origin', '*');        
        
        const { transaction, networkid } = request.body;            
                
        if (networkid === 'identifier'){            
            const meat = new RestaurantFood();            
            var result = await meat.receivedSignedTransactionForBroadcast(transaction);

            return response.json({ status: "Transaction result", response: result});
        }else{
            return response.json({ status: "Invalid request", response: null});
        }
    },

    async cryptographyText(request, response){
        response.setHeader('Access-Control-Allow-Origin', '*');
        
        const { text } = request.body;

        var encryptedText = RestaurantInfo.getCryptographedMessage(text);

        return response.json( { response: encryptedText} );
    }
}