const express = require("express");
const emailController = require("./16.controllers/sendMailController");

const emailRouter = express.Router();

emailRouter.route("/:to/:message").post(emailController.handleMail);

module.exports = emailRouter;
