const transactions = require('@liskhq/lisk-transactions');
const { APIClient } = require('@liskhq/lisk-api-client');

const api = new APIClient(['http://localhost:4000']);

var address = "12155463429267245415L";
let tx = new transactions.TransferTransaction({    
    amount: transactions.utils.convertLSKToBeddows('200000'),
    recipientId: address,
    timestamp: utils.getTimeFromBlockchainEpoch(new Date())    
});

tx.sign('wagon stock borrow episode laundry kitten salute link globe zero feed marble');

console.log(tx.stringify());
process.exit(0);