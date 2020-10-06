const transactions = require('@liskhq/lisk-transactions');
const { getNetworkIdentifier } = require('@liskhq/lisk-cryptography');
const { APIClient } = require('@liskhq/lisk-api-client');
const { Mnemonic } = require('@liskhq/lisk-passphrase');

const networkIdentifier = getNetworkIdentifier(
    "23ce0366ef0a14a91e5fd4b1591fc880ffbef9d988ff8bebf8f3666b0c09597d",
    "Lisk",
);

const api = new APIClient(['http://localhost:4000']);

var address = "12155463429267245415L";
let tx = new transactions.TransferTransaction({
    asset: { amount: `${transactions.utils.convertLSKToBeddows('20000')}` ,
    recipientId: address
    },    
    networkIdentifier: networkIdentifier
});

tx.sign('creek own stem final gate scrub live shallow stage host concert they');

console.log(tx.stringify());
process.exit(0);