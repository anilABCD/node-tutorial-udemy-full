const http = require("http");

const url = require("url");

const server = http.createServer((req, res) => {
  console.log(req.url);

  const pathName = req.url;

  //Url Routing
  if (pathName === "/overview" || pathName === "/") {
    res.end("Hello from the OVERVIEW");
  } else if (pathName === "/product") {
    res.end("Hello from the PRODUCT");
  } else {
    res.end("Page not found");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
