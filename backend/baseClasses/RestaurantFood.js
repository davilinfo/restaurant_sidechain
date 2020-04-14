const { EPOCH_TIME } = require ("@liskhq/lisk-constants");
const { getAddressFromPassphrase } = require ("@liskhq/lisk-cryptography");
const transactions = require("@liskhq/lisk-transactions");
const blockchainClient = require ("../APIClient/blockchainClient");
const Entrance = require("../../transactions/FoodTransaction");
const ResultSchema = require("../models/result");

class RestaurantFood{            

    constructor(){}

    getTimestamp = () => {
        const millisSinceEpoc = Date.now() - Date.parse(EPOCH_TIME);
        const inSeconds = ((millisSinceEpoc) / 1000).toFixed(0);
        return parseInt(inSeconds);
    }    
    
    getTransactionById(id){        
        return blockchainClient.transactions.get(id);
    }

    broadcastTransaction = (transaction) => {                        
        return blockchainClient.transactions.broadcast(transaction.toJSON());
    }

    getAccount = (passphrase) => {
        const address = getAddressFromPassphrase(passphrase);
        return blockchainClient.accounts.get({ address, limit: 1 });
    };    

    async commandFood(passphrase, food, table, request_type, username, phone, deliveryaddress) {        

        food.table= table;
        food.request_type= request_type;
        food.username= username;        
        food.phone= phone;
        food.deliveryaddress= deliveryaddress;
        food.closed= true;

        const txFood = new Entrance({
            asset: {
                name: food.name,
                description: food.description,
                username: food.username,
                phone: food.phone,
                deliveryaddress: food.deliveryaddress,
                foodType: food.request_type
            },
            amount: `${transactions.utils.convertLSKToBeddows(food.amount.toString())}`,
            recipientId: '8890555343333224116L', //restaurant lisk address
            timestamp: this.getTimestamp()
        });

        txFood.sign(passphrase);
        
        ResultSchema.broadcastInfo = await this.broadcastTransaction(txFood);
        ResultSchema.transaction = txFood;   
        console.log(ResultSchema);
        
        return ResultSchema;
    }
}

module.exports = RestaurantFood;