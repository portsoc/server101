// use the HTTP library https://nodejs.org/api/http.html
import * as http from 'http';

// send "hello world" in response to requests for /hello-world.txt
// for other requests, send 404 not found
function responder(req, res) {
  if (req.url === '/hello-world.txt') {
    res.write('Hello World!');
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
