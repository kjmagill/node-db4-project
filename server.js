const express = require('express');
const helmet = require('helmet');
// const SchemeRouter = require('./schemes/scheme-router.js');
const server = express();

server.use([helmet(), logger]);
server.use(express.json());
// server.use('/api/schemes', [helmet(), logger, SchemeRouter]);

server.get('/', (req, res) => {
  res.send(`<h1>Welcome to KJ Magill's Node Db-4 Project</h1>`);
});

function logger(req, res, next) {
  console.log(req.method, req.url, Date.now());
  next();
}

module.exports = server;
