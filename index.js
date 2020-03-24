const { Application, genesisBlockDevnet, configDevnet } = require ('lisk-sdk');


configDevnet.app.label = 'restaurant-sidechain-app';
configDevnet.components.storage.port = 5435;
configDevnet.components.storage.database = 'lisk_dev';
configDevnet.components.storage.host = 'localhost'

configDevnet.app.genesisConfig.BLOCK_TIME = 5;

const app = new Application(genesisBlockDevnet, configDevnet);

app.run()
    .then(() => app.logger.info('App started...') )
    .catch(error => {
        console.error('Faced error in application', error);
        process.exit(1);
    });