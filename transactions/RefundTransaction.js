const transaction = require('@liskhq/lisk-transactions');
const {
    BaseTransaction,
    TransactionError
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
        const sender = store.account.get(this.senderId);
        const newObj = {...sender, asset: { transactionId: this.asset.transactionId }};
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

module.exports = RefundTransaction;