const { APIClient } = require ("@liskhq/lisk-api-client");
const { nodes, demoPubKeys, genesisPassphrase } = require ("../config/config.json");

const client = new APIClient(nodes);

module.exports = client;

