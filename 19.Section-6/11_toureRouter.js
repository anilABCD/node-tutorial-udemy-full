const express = require("express");

const tourRouter = express.Router();

function getUsers(req, res) {
  res.status(200).send("Hello from Tours ");
}

tourRouter.route("/").get(getUsers);

module.exports = tourRouter;
