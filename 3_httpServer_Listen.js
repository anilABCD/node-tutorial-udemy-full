const http = require("http");

// httpServer
const server = http.createServer((req, res) => {
  res.end("Hello from the server");
});

// Listen
server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
