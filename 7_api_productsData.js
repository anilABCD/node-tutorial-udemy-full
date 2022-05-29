const http = require("http");

const fs = require("fs");

const url = require("url");

//productData
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");

//productData Object
const dataObject = JSON.parse(data);

const server = http.createServer((req, res) => {
  console.log(req.url);

  const pathName = req.url;

  if (pathName === "/overview" || pathName === "/") {
    res.end("Hello from the OVERVIEW");
  } else if (pathName === "/product") {
    res.end("Hello from the PRODUCT");
  } else if (pathName === "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
      "my-own-header": "API",
    });

    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "hy-own-header": "hello-world",
    });

    res.end("<h1>Page not found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
