const express = require('express');
const { json } = require ('express');
const home = require('./Router/Home');
const hello = require('./Router/Hello');

const server = express();

server.use(json());

server.use('/', home); 
server.use('/hello', hello);


module.exports = server;