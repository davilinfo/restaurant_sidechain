const { EPOCH_TIME } = require ("@liskhq/lisk-constants");
const { getAddressFromPassphrase } = require ("@liskhq/lisk-cryptography");
const transactions = require("@liskhq/lisk-transactions");
const blockchainClient = require ("../APIClient/blockchainClient");
const Entrance = require("../../transactions/EntranceTransaction_1");

const getTimestamp = () => {
    const millisSinceEpoc = Date.now() - Date.parse(EPOCH_TIME);
    const inSeconds = ((millisSinceEpoc) / 1000).toFixed(0);
    return parseInt(inSeconds);
}

const broadcastTransaction = (transaction) => {                        
    return blockchainClient.transactions.broadcast(transaction.toJSON());
}

class RestaurantFood{            

    getAccount(passphrase){
        const address = getAddressFromPassphrase(passphrase);
        return blockchainClient.accounts.get({ address, limit: 1 });
    };

    static commandFood(passphrase, food) {

        const txFood = new Entrance({
            asset: {
                name: food.name,
                description: food.description
            },
            amount: `${transactions.utils.convertLSKToBeddows(food.amount.toString())}`,
            recipientId: '10881167371402274308L', //restaurant lisk address
            timestamp: getTimestamp()
        });

        txFood.sign(passphrase);
        console.log("transaction created", txFood);
        return broadcastTransaction(txFood);
    }
}

module.exports = RestaurantFood;