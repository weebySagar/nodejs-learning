const http = require('http');

const handleRequest = require('./routes');

const server = http.createServer(handleRequest);


server.listen(4000)