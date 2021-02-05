// use the Express.js framework https://expressjs.com/
import express from 'express';

import { nextMessage } from './messages.mjs';

// return a dynamic message
function responder(req, res) {
  const message = nextMessage();
  const date = new Date().toString();

  res.send(message + '\n' + date);
}

// create an Express.js server (aka app)
const app = express();

// connect our responder to the /dyn1 path
app.get('/dyn1', responder);

// make the server available on the network
app.listen(8080);
