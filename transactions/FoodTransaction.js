const {
    BaseTransaction,
    TransactionError
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
        const newObj = {...sender, asset: { name: this.asset.name, description: this.asset.description, foodType: this.asset.foodType, username: this.asset.username, phone: this.asset.phone, deliveryaddress: this.asset.deliveryaddress }};
        store.account.set(sender.address, newObj);
        return [];
    }

    undoAsset(store){
        const sender = store.account.get(this.senderId);
        const oldObj = {...sender, asset: null };
        store.account.set(sender.address, oldObj);
        return [];
    }
}

module.exports = FoodTransaction;