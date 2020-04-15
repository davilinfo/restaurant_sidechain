const transaction = require('@liskhq/lisk-transactions');
const {
    BaseTransaction,
    TransactionError,
    utils
} = require('@liskhq/lisk-transactions');

class RefundTransaction extends BaseTransaction {
    static get TYPE() {
        return 19;
    }

    static get FEE () {
		return `${10 ** 5}`;
    };
    
    async prepare(store) {
        await store.account.cache([
            {
                address: this.senderId,
            },
        ]);
    }

    validateAsset(){
        const errors = [];                
        
        if (!this.amount || this.amount <= 0 || transaction.utils.convertLSKToBeddows(1000) < this.amount ){
            errors.push(
                new TransactionError(
                    'Invalid "value" defined on transaction',
                    this.id,
                    '.amount',
                    this.amount,
                    'A value bigger than 0 and smaller than 1000'
                )
            );
        }
        return errors;
    }

    applyAsset(store){            
        const restaurantAccount = store.account.get(this.senderId);
        const restaurantAccountBalanceDeducted= utils.BigNum(sender.balance).sub(this.amount);

        const updatedRestaurant = {
            ...restaurantAccount,
            balance: restaurantAccountBalanceDeducted.toString()
        }
        store.account.set(restaurantAccount.address, updatedRestaurant);

        const client = store.account.get(this.recipientId);
        const clientRefunded = utils.BigNum(client.balance).add(this.amount);

        const clientUpdated = {
            ...client,
            ...{ balance: clientRefunded.toString(),
                asset: {
                    transactionId: this.asset.transactionId
                }
            }
        };
        
        store.account.set(client.address, clientUpdated);
        return [];
    }

    undoAsset(store){
        const restaurantAccount = store.account.get(this.senderId);
        const restaurantAccountWithFoodRequest= utils.BigNum(sender.balance).add(this.amount);

        const updatedRestaurant = {
            ...restaurantAccount,
            balance: restaurantAccountWithFoodRequest.toString()
        }
        store.account.set(restaurantAccount.address, updatedRestaurant);

        const client = store.account.get(this.recipientId);
        const clientDeducted = utils.BigNum(client.balance).sub(this.amount);

        const clientUpdated = {
            ...client,
            ...{ balance: clientDeducted.toString(),
                asset: null
            }
        };
                
        store.account.set(client.address, clientUpdated);
        return [];
    }
}

module.exports = RefundTransaction;