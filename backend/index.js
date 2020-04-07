const express = require('express');
const cors = require('cors');
const http = require('http');
const routes = require('./routes/routes');

const app = express();
const server= http.Server(app);

app.use(cors());
//registra em toda aplicação uso de json
app.use(express.json());
app.use(routes);
app.use(express.static(__dirname.concat('/foodTypes')));

server.listen(3333);

console.log("Initiated...");