const express = require('express');
const app = express();
const server = require('./src/app');

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`%s listening at ${PORT}`);
});

