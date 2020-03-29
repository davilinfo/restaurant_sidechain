const Entrance = require("../transactions/EntranceTransaction_1");
const transactions = require("@liskhq/lisk-transactions");
const { EPOCH_TIME } = require("@liskhq/lisk-constants");

const getTimestamp = () => {
    const millisSinceEpoc = Date.now() - Date.parse(EPOCH_TIME);
    const inSeconds = ((millisSinceEpoc) / 1000).toFixed(0);
    return parseInt(inSeconds);
}

let txEntrance1 = new Entrance({
    asset: {
        name: 'oysters',
        description: '12 fresh oysters served in a plate',
        amount: `${transactions.utils.convertLSKToBeddows('90')}`,
    },
    fee: `${transactions.utils.convertLSKToBeddows('12.8')}`,
    recipientId: '10881167371402274308L', //restaurant lisk address
    timestamp: getTimestamp()
});

//signing transaction
txEntrance1.sign('wagon stock borrow episode laundry kitten salute link globe zero feed marble');

console.log(txEntrance1.stringify());
process.exit(0);
