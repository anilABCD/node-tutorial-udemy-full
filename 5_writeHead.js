const http = require("http");

const url = require("url");

const server = http.createServer((req, res) => {
  console.log(req.url);

  const pathName = req.url;

  if (pathName === "/overview" || pathName === "/") {
    res.end("Hello from the OVERVIEW");
  } else if (pathName === "/product") {
    res.end("Hello from the PRODUCT");
  } else {
    //writeHead
    res.writeHead(404, {
      "Content-type": "text/html",
      // "Content-type" :"application/json",
      "hy-own-header": "hello-world",
    });

    res.end("<h1>Page not found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
