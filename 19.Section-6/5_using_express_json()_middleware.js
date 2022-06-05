// Using Express
const express = require("express");

// app
const app = express();

// json middle ware ...
// accessing in req.body in post ...
app.use(express.json());

// post example
app.post("/createSomething", (req, res) => {
  // Note :
  // access post data sent from client ...
  // dont forget to send data as application/json from postman ... default they use is Text
  // change that to application/json ...
  console.log(req.body);
  res.status(201).send(req.body);
});

// Get Root ...
app.get("/", (req, res) => {
  res.status(404).json({ message: "Hello from server side ", app: "Express " });
});

// Port 80 ...
const port = 80;
app.listen(port, () => {
  console.log(`App is running on port ${port} `);
});
