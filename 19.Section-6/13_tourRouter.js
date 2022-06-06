const express = require("express");

const tourController = require("./11.controllers/tourController");

const tourRouter = express.Router();

// route.param() for /:id
tourRouter.param("id", (req, res, next, value) => {
  console.log(`only for tour router /:id params route ${value}`);
  next();
});

tourRouter.route("/").get(tourController.getUsers);

tourRouter.route("/:id").get(tourController.getUsers);

module.exports = tourRouter;
