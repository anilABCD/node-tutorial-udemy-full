const express = require("express");

const userRouter = express.Router();

function getUsers(req, res) {
  res.send("Hello from users");
}

userRouter.route("/").get(getUsers);

module.exports = userRouter;
