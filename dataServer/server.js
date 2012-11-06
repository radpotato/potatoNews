var http = require('http')
    , fs = require('fs');
var requestListener = function(req, res) {
    fs.readFile('./viewer/index.html', function(error, data) {
        res.writeHead(200, { 'Content-Type' : 'text/html'});
		res.end(data);
    });
};
var server = http.createServer(requestListener);

server.listen(process.env.PORT || 3000, "127.0.0.1");
