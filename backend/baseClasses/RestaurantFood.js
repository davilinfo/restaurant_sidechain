const { EPOCH_TIME } = require ("@liskhq/lisk-constants");
const { getAddressFromPassphrase } = require ("@liskhq/lisk-cryptography");
const transactions = require("@liskhq/lisk-transactions");
const blockchainClient = require ("../APIClient/blockchainClient");
const Entrance = require("../../transactions/FoodTransaction");
var transactioResult = null;

class RestaurantFood{            

    constructor(){}

    getTimestamp = () => {
        const millisSinceEpoc = Date.now() - Date.parse(EPOCH_TIME);
        const inSeconds = ((millisSinceEpoc) / 1000).toFixed(0);
        return parseInt(inSeconds);
    }

    getTransaction(){        
        return transactioResult;
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

    commandFood(passphrase, food) {

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
        transactioResult = txFood;                 
        
        return this.broadcastTransaction(txFood);
    }
}

module.exports = RestaurantFood;