const { EPOCH_TIME } = require ("@liskhq/lisk-constants");
const { getAddressFromPassphrase, getNetworkIdentifier } = require ("@liskhq/lisk-cryptography");
const transactions = require("@liskhq/lisk-transactions");
const blockchainClient = require ("../APIClient/blockchainClient");
const Refund = require("../../transactions/RefundTransaction");
const RestaurantInfo = require("../baseClasses/RestaurantInfo");
const ResultSchema = require("../models/result");

class RefundRestaurant{            

    constructor(){}

    getTimestamp(){
        const millisSinceEpoc = Date.now() - 8 - Date.parse(EPOCH_TIME);
        const inSeconds = ((millisSinceEpoc) / 1000).toFixed(0);
        return parseInt(inSeconds);
    }    

    getTransactionById(options){        
        return blockchainClient.transactions.get(options);
    }    
    
    broadcastTransaction(transaction){                        
        return blockchainClient.transactions.broadcast(transaction.toJSON());
    }

    getAccount(passphrase){
        const address = getAddressFromPassphrase(passphrase);
        return blockchainClient.accounts.get({ address, limit: 1 });
    };    

    async commandRefund(transactionId, amount, recipientAddress) {
        
        const networkIdentifier = getNetworkIdentifier(
            "23ce0366ef0a14a91e5fd4b1591fc880ffbef9d988ff8bebf8f3666b0c09597d",
            "Lisk",
        );

        const txFood = new Refund({
            asset: {               
                transactionId: transactionId
            },
            amount: `${transactions.utils.convertLSKToBeddows(amount.toString())}`,            
            recipientId: recipientAddress, //refund lisk address
            timestamp: this.getTimestamp(),
            networkIdentifier: networkIdentifier
        });
        
        try{
            txFood.sign(RestaurantInfo.getRestaurantPassphrase());
            ResultSchema.broadcastInfo = await this.broadcastTransaction(txFood);
            ResultSchema.transaction = txFood;   
            console.log(ResultSchema);
        }catch(e){
            console.log(e);
            ResultSchema.transaction = {
                "message": "not completed"
            };
            ResultSchema.broadcastInfo = {
                "meta": {
                  "status": false
                },
                "data": {
                  "message": e
                },
                "links": {}
            }
        }
        
        return ResultSchema;
    }
}

module.exports = RefundRestaurant;