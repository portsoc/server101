// use the HTTP library https://nodejs.org/api/http.html
import * as http from 'http';

import { readFile } from './files.mjs';

// where web pages are stored
const WEB_ROOT = 'webpages';

// load and send the requested file
async function responder(req, res) {
  const fileContents = await readFile(req, WEB_ROOT);
  if (fileContents) {
    res.write(fileContents);
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
