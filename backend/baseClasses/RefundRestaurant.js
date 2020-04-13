const { EPOCH_TIME } = require ("@liskhq/lisk-constants");
const { getAddressFromPassphrase } = require ("@liskhq/lisk-cryptography");
const transactions = require("@liskhq/lisk-transactions");
const blockchainClient = require ("../APIClient/blockchainClient");
const Refund = require("../../transactions/RefundTransaction");
const restaurantPassphrase = "romance mansion replace police owner inmate angry aware render arrange moon order";
const restaurantAddress = '8890555343333224116L';
var transactioResult = null;

class RefundRestaurant{            

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

    commandRefund(transactionId, amount, recipientAddress) {

        console.log(transactionId, amount, recipientAddress);
        const txFood = new Refund({
            asset: {               
                transactionId: transactionId
            },
            amount: `${transactions.utils.convertLSKToBeddows(amount.toString())}`,            
            recipientId: recipientAddress, //refund lisk address
            timestamp: this.getTimestamp()
        });

        txFood.sign(restaurantPassphrase); //restaurant passphrase          
        transactioResult = txFood;               
        
        return this.broadcastTransaction(txFood);
    }
}

module.exports = RefundRestaurant;