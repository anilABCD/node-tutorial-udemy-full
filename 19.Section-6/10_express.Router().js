// Using Express
const express = require("express");

// app
const app = express();

// json middle ware ...
app.use(express.json());

const toureRouter = express.Router();
const userRouter = express.Router();

app.use("/api/v1/tours", toureRouter);
app.use("/api/v1/user", userRouter);

function getTour(req, res) {
  res.send("Hello From Tour");
}

function getUser(req, res) {
  res.send("Hello From User");
}

toureRouter.route("/").get(getTour);
userRouter.route("/").get(getUser);

// port 80 ...
const port = 80;
app.listen(port, () => {
  console.log(`App is running on port ${port} `);
});
