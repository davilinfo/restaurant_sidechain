const FoodRequest = require("liskrestaurant_transactions");
const transactions = require("@liskhq/lisk-transactions");
const { EPOCH_TIME } = require("@liskhq/lisk-constants");
const cryptography = require('@liskhq/lisk-cryptography');

const getTimestamp = () => {
    const millisSinceEpoc = Date.now() - Date.parse(EPOCH_TIME);
    const inSeconds = ((millisSinceEpoc) / 1000).toFixed(0);
    return parseInt(inSeconds);
}

const passphrase = 'creek own stem final gate scrub live shallow stage host concert they';

const publicKey = cryptography.getPrivateAndPublicKeyFromPassphrase(passphrase).publicKey;

        var clientData = cryptography.encryptMessageWithPassphrase(
            "user=davi".split('=')[1].concat(' ***Field*** ')
            .concat("phone=71997035287".split('=')[1]).concat(' ***Field*** ')
            .concat("deliveryaddress=address".split('=')[1]).concat(' ***Field*** ')
            .concat("observation=obs".split('=')[1]),
            passphrase,
            publicKey
            );                            

        const networkIdentifier = cryptography.getNetworkIdentifier(
            "23ce0366ef0a14a91e5fd4b1591fc880ffbef9d988ff8bebf8f3666b0c09597d",
            "Lisk",
        ); 

let txEntrance1 = new FoodRequest({
    asset: {
        name: 'oysters',
        description: '12 fresh oysters served in a plate',
        username: "de1f619f3de33d89288cdc3c7eb80b5bab63c9d5****0b4954ce99a759a7bef94767f15879538fec20c085848e20",
        phone: "e1334c5bb3ce54bca94bfd81d57683c08c9ae17087c9344486f743****8138bd5cc2d6cb2f60ed055755c29b614b22c0e444e37cfb",
        deliveryaddress: "5ca6dbe3f90de188a2fd76aa993176dcd16cd9dc8f05e3****9efa9d2fe5690aa2b07c6a5f0e16f4773426d1b3ab0b7baf",
        foodType: 1,
        observation: "675c53a18c85159521ac8ca617e7584a1e868d267540eb6d909e6f****7e1697cb31de211b99d9590de52e20bf051456f66776aec9",
        clientData: clientData.encryptedMessage,
        clientNonce: clientData.nonce,
        amount: `${transactions.utils.convertLSKToBeddows('48')}`,
        recipientId: '12155463429267245415L', //restaurant lisk address
    },    
    timestamp: getTimestamp(),
    networkIdentifier: networkIdentifier
});

//signing transaction
txEntrance1.sign(passphrase);

console.log(txEntrance1.stringify());
process.exit(0);
