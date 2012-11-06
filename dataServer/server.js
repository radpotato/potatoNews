var http = require('http')
    , fs = require('fs');
http.createServer(function (req, res) {
	fs.readFile('./viewer/index.html', function(error, data) {
		res.writeHead(200, { 'Content-Type' : 'text/html'});
		res.end(data);
	});
}).listen(3000, '127.0.0.1');

console.log('Server running at http://127.0.0.1:3000');
