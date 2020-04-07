const { EPOCH_TIME } = require ("@liskhq/lisk-constants");
const { getAddressFromPassphrase } = require ("@liskhq/lisk-cryptography");
const transactions = require("@liskhq/lisk-transactions");
const blockchainClient = require ("../APIClient/blockchainClient");
const Entrance = require("../../transactions/FoodTransaction");

class RestaurantFood{            

    constructor(){}

    getTimestamp = () => {
        const millisSinceEpoc = Date.now() - Date.parse(EPOCH_TIME);
        const inSeconds = ((millisSinceEpoc) / 1000).toFixed(0);
        return parseInt(inSeconds);
    }
    
    broadcastTransaction = (transaction) => {                        
        return blockchainClient.transactions.broadcast(transaction.toJSON());
    }

    getAccount(passphrase){
        const address = getAddressFromPassphrase(passphrase);
        return blockchainClient.accounts.get({ address, limit: 1 });
    };

    commandFood(passphrase, food) {

        const txFood = new Entrance({
            asset: {
                name: food.name,
                description: food.description
            },
            amount: `${transactions.utils.convertLSKToBeddows(food.amount.toString())}`,
            recipientId: '10881167371402274308L', //restaurant lisk address
            timestamp: this.getTimestamp()
        });

        txFood.sign(passphrase);
        console.log("transaction created", txFood);
        return  { 
                "transaction": txFood,
                "result" : this.broadcastTransaction(txFood)
                };
    }
}

module.exports = RestaurantFood;