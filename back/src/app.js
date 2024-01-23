const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const setHeaders = require('../utils/middlewares/setHeaders.js')
const errorHandler = require('../utils/middlewares/errorHandler.js')
require('./db.js');

const server = express();

server.name = 'API';

//--------------------------------------------------------------
// Middlewares
server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
// --
server.use(setHeaders);
// -------------------------------------------------------------

server.use('/', routes);

// -------------------------------------------------------------
server.use(errorHandler);


// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
