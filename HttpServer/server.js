const http = require("http");
const url = require("url");

var list = [{ name: "Zahra", age: 77 }];

// declare the server
const server = http.createServer((request, res) => {
  const parseUrl = url.parse(request.url, true);
  const path = parseUrl.pathname;
  const method = request.method;

  console.log (path , method)
  if (path === "/items" && method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(list));
  } else if (path === "/items" && method === "POST") {
    //the front will send data that we need to collect
    var dataFromFront = "";
    request.on("data", (piece) => {
      dataFromFront += piece.toString();
    });

    request.on("end", () => {
      console.log(dataFromFront);
      // manipulate the data as we like
      const data = JSON.parse(dataFromFront)
      list.push(data)
      //send back something to the front end
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(list));
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

// run the server
server.listen(8000, () => {
  console.log("server is running");
});
