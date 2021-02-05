// use the HTTP library https://nodejs.org/api/http.html
import * as http from 'http';

// code to send "hello world" in response to
// any and all HTTP requests
function responder(req, res) {
  res.write('hello world');
  res.end();
}

// create a configurabel server object
const server = http.createServer(responder);

// start the server
server.listen(8080);
