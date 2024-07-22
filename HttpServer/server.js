const http = require('http');
const url = require('url');

var list = [{ name: 'Zahra', age: 77 }];

// declare the server
const server = http.createServer((request, res) => {
  const parseUrl = url.parse(request.url, true);
  const path = parseUrl.pathname;
  const method = request.method;
  
  if (path === "/items" && method === "GET") {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(list));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// run the server
server.listen(8000, () => {
  console.log('server is running');
});
