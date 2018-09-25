// Primary file for API

//  Dependencies

var http = require('http');
var url  = require('url');

// The server should respond to all requests with a string
var server = http.createServer(function(req, res){


    // get url and parse it
    var parsedUrl = url.parse(req.url, true);

    // get the path
    var path = parsedUrl.pathname;
    var trimmedPath = path.replace(/^\/+|\/+$/g, '')

    // send the response 
    res.end('Hello World\n');

    // log the request path
    console.log('Request reveived on path: '+trimmedPath);
    
});
// Start the server, and have it  listen on port 3000

server.listen(3000, function(){
    console.log('The server is listening on port 3000 now');
});