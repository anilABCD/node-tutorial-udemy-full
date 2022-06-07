const express = require("express");

const userRouter = express.Router();

const userController = require("./13.controllers/userController");

function getUsers(req, res) {
  res.status(200).send("Hello from users ");
}

function middleWare(req, res, next) {
  if (req.body.id2 === 10)
    return res.status(404).send("Not found from middleware");
  next();
}

userRouter.param("id2", userController.checkId);

userRouter.route("/").get(getUsers);

// middleware in post
userRouter.route("/:id/:id2").post(middleWare, getUsers);

module.exports = userRouter;
