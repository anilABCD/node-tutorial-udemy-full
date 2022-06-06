const { send } = require("express/lib/response");

exports.getUsers = (req, res) => {
  res.status(200).send("Hello from Tours ");
};

exports.checkId = (req, res, next, value) => {
  console.log("checkId", value, req.params.id2);

  if (
    req.params.id2 == 3 ||
    req.params.id2 == undefined ||
    req.params.id == undefined
  ) {
    return res
      .status(404)
      .json({ status: "failure", message: "data not found" });
  }

  next();
};
