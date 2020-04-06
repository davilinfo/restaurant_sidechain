import { EPOCH_TIME } from "@liskhq/lisk-constants";
import { utils } from "@liskhq/lisk-transactions";
import { APIClient } from "@liskhq/lisk-api-client";
import { getAddressFromPassphrase } from "@liskhq/lisk-cryptography";

import { nodes, demoPubKeys, genesisPassphrase } from "../config/config.json";

const client = new APIClient(nodes);

