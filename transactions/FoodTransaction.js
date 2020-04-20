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
		return `${transactions.utils.convertLSKToBeddows(0.1)}`;
    };        

    /* Prepare function stores both sender and recipient account in the cache so it is possible to
       modify the accounts during the `applyAsset` and `undoAsset` steps. */
    async prepare(store) {
        await store.account.cache([
            {
                address: this.recipientId,
            },
            {
                address: this.senderId,
            }
        ]);
    }

    validateAsset(){
        const errors = [];        

        if(!utils.validateAddress(this.senderId)){
            errors.push(new TransactionError(
                'Invalid client "Lisk address" defined on transaction',
                this.id,
                "client lisk address",
                this.senderId
            ));
        }

        if (!utils.validatePublicKey(this.senderPublicKey)){
            errors.push(new TransactionError(
                'Invalid client "Lisk public key" defined on transaction',
                this.id,
                "client public key",
                this.senderPublicKey
            ));
        }                               

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

        if (!this.asset.foodType || this.asset.foodType <= 0){
            errors.push(
                new TransactionError(
                    'Invalid "food type" defined on transaction',
                    this.id,
                    '.foodType',
                    this.asset.foodType,
                    'A value bigger than 0'
                )
            );
        }

        if (!this.asset.deliveryaddress){
            errors.push(
                new TransactionError(
                    'Invalid "delivery address" defined on transaction',
                    this.id,
                    '.deliveryaddress',
                    this.asset.phone,
                    'A string value bigger than 0'
                )
            );
        }

        if (!this.asset.phone){
            errors.push(
                new TransactionError(
                    'Invalid "phone" defined on transaction',
                    this.id,
                    '.phone',
                    this.asset.phone,
                    'A value bigger than 0'
                )
            );
        }

        if (!this.asset.username){
            errors.push(
                new TransactionError(
                    'Invalid "username" defined on transaction',
                    this.id,
                    '.username',
                    this.asset.username,
                    'A string value bigger than 0'
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
        const errors = [];
        
        const sender = store.account.get(this.senderId);

        /*if (!sender){           
            errors.push(
                new TransactionError(
                    'Invalid "sender", please verify your passphrase',
                    this.id,
                    '.sender',
                    this.senderId,
                    'Verify your passpahrase and address'
                )
            );            
        }*/

        const senderBalanceDeducted = new utils.BigNum(sender.balance).sub(new utils.BigNum(this.amount));

        if (senderBalanceDeducted < 0){
            errors.push(
                new TransactionError(
                    'Not enough "balance" for the transaction',
                    this.id,
                    '.amount',
                    this.amount,
                    'Need a balance at least equal than amount'
                )
            );
        }

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
                
        return errors;
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