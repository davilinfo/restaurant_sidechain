const {
    BaseTransaction,
    TransactionError
} = require('@liskhq/lisk-transactions');

class EntranceTransaction_1 extends BaseTransaction {
    static get TYPE() {
        return 20;
    }

    static get FEE () {
		return `${10 ** 7}`;
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
        if (!this.asset.name || typeof this.asset.name !== 'string' || this.asset.name.length > 200){
            errors.push(
                new TransactionError(
                    'Invalid "entrance name" defined on transaction',
                    this.id,
                    '.asset.name',
                    this.asset.name,
                    'A string value no longer than 200 characters'
                )
            );
        }

        if (!this.asset.description || typeof this.asset.description !== 'string' || this.asset.name.length > 500){
            errors.push(
                new TransactionError(
                    'Invalid "description" defined on transaction',
                    this.id,
                    '.asset.description',
                    this.asset.name,
                    'A string value no longer than 500 characters'
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
        const newObj = {...sender, asset: { name: this.asset.name, description: this.asset.description, requestingAccount: this.asset.requestingAccount }};
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

module.exports = EntranceTransaction_1;