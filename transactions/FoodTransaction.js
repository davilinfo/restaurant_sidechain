const {
    BaseTransaction,
    TransactionError,
    utils
} = require('@liskhq/lisk-transactions');

class FoodTransaction extends BaseTransaction {
    static get TYPE() {
        return 20;
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

        if (!this.asset.description || typeof this.asset.description !== 'string' || this.asset.name.length > 1500){
            errors.push(
                new TransactionError(
                    'Invalid "description" defined on transaction',
                    this.id,
                    '.asset.description',
                    this.asset.name,
                    'A string value no longer than 1500 characters'
                )
            );
        }
        
        if (!this.amount || this.amount <= 0){
            errors.push(
                new TransactionError(
                    'Invalid "value" defined on transaction',
                    this.id,
                    '.amount',
                    this.amount,
                    'A value bigger than 0'
                )
            );
        }
        return errors;
    }

    applyAsset(store){            
        const sender = store.account.get(this.senderId);
        const senderBalanceDeducted = new utils.BigNum(sender.balance).sub(new utils.BigNum(this.amount));
        
        const updatedSender = {
            ...sender,
            balance: senderBalanceDeducted.toString()
        }
        store.account.set(sender.address, updatedSender);

        const restaurantAccount = store.account.get(this.recipientId);
        const restaurantBalanceWithFoodRequest = new utils.BigNum(restaurantAccount.balance).add(new utils.BigNum(this.amount)); 
        
        const updatedRestaurantAccount = {...restaurantAccount, 
            ...{ balance: restaurantBalanceWithFoodRequest.toString(),
            asset: { 
                name: this.asset.name, 
                description: this.asset.description, 
                foodType: this.asset.foodType, 
                username: this.asset.username, 
                phone: this.asset.phone, 
                deliveryaddress: 
                this.asset.deliveryaddress }
            }
        };

        store.account.set(restaurantAccount.address, updatedRestaurantAccount);
                
        return [];
    }

    /* UndoAsset function tells the blockchain how to rollback changes made in the applyAsset function.
        The original balance for both the sender and restaurant account is restored.
        In addition, the `asset` field for the restaurant account `null` is reseted, as it did not hold any previous data.*/
    /* --- Revert sender account --- */
    undoAsset(store){
        const sender = store.account.get(this.senderId);

        const senderBalanceWithFoodAmount = new utils.BigNum(sender.balance).add(new utils.BigNum(this.amount));
        const updatedSender = {
            ...sender,
            balance: senderBalanceWithFoodAmount.toString()
        };
        store.account.set(sender.address, updatedSender);

        const restaurantAccount = store.account.get(this.recipientId);
        const restaurantBalanceWithFoodRequest = new utils.BigNum(restaurantAccount.balance).sub(new utils.BigNum(this.amount));

        const updatedRestaurantAccount = {...sender, 
            ... { balance: restaurantBalanceWithFoodRequest.toString(),
            asset: null }
        };
        store.account.set(restaurantAccount.address, updatedRestaurantAccount);
        return [];
    }
}

module.exports = FoodTransaction;