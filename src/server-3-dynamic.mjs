// use the HTTP library https://nodejs.org/api/http.html
import * as http from 'http';

import { nextMessage } from './messages.mjs';

// return a dynamic message
function responder(req, res) {
  if (req.url === '/dyn1') {
    const message = nextMessage();
    const date = new Date().toString();

    res.write(message + '\n' + date);
  } else {
    res.statusCode = 404;
    res.write('not found');
  }
  res.end();
}

// create a server that uses our responder
const server = http.createServer(responder);

// make the server available on the network
server.listen(8080);
