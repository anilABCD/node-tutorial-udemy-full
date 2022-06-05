const express = require("express");

const tourController = require("./11.controllers/tourController");

const tourRouter = express.Router();

tourRouter.route("/").get(tourController.getUsers);

module.exports = tourRouter;
