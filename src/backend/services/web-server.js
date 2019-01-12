const http = require('http');
const express = require('express'); //server
const webServerConfig = require('../config/web-server.js'); //server config
const morgan = require('morgan'); //server logging

let httpServer;

function initialize() {
  return new Promise((resolve, reject) => {
    const app = express();
    httpServer = http.createServer(app);

    app.use(morgan('combined'));

    app.get('/', (req, res) => {
      res.end('Hello world!');
    });

    httpServer.listen(webServerConfig.port)
      .on('listening', () => {
        console.log(`Web server is listening on localhost:${webServerConfig.port}`);

        resolve();
      })
      .on('error', err => {
        reject(err);
      })
  });
}

module.exports.initialize = initialize;

function close() {
  return new Promise((resolve, reject) => {
    httpServer.close((err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve();
    });
  });
}

module.exports.close = close;
