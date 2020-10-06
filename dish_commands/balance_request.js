const transactions = require('@liskhq/lisk-transactions');
const cryptography = require('@liskhq/lisk-cryptography');
const { APIClient } = require('@liskhq/lisk-api-client');
const { Mnemonic } = require('@liskhq/lisk-passphrase');
const { EPOCH_TIME } = require("@liskhq/lisk-constants");

const getTimestamp = () => {
    const millisSinceEpoc = Date.now() - Date.parse(EPOCH_TIME);
    const inSeconds = ((millisSinceEpoc) / 1000).toFixed(0);
    return parseInt(inSeconds);
}

const networkIdentifier = getNetworkIdentifier(
    "23ce0366ef0a14a91e5fd4b1591fc880ffbef9d988ff8bebf8f3666b0c09597d",
    "Lisk",
);

const api = new APIClient(['http://localhost:4000']);

var address = "12155463429267245415L";
let tx = new transactions.TransferTransaction({
    amount: `${transactions.utils.convertLSKToBeddows('2000')}`,
    recipientId: address,
    timestamp: getTimestamp(),
    networkIdentifier: networkIdentifier
});

tx.sign('creek own stem final gate scrub live shallow stage host concert they'); // Genesis account with address: 16313739661670634666L

console.log(tx.stringify());
process.exit(0);