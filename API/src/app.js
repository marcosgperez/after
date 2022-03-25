const express = require('express');
const { json } = require('express');
const home = require('./Router/Home');

const server = express();

server.use(json());

server.use('/dogs', home);


module.exports = server;