// no one uses this controller like this ... just for example

const mailer = require("../16_utils_email");

exports.handleMail = async (req, res, next) => {
  const options = {
    to: req.params.to,
    message: req.params.message,
    subject: req.params.message,
  };

  console.log(options);

  await mailer.sendEmail(options);

  res.status(200).send("Mail Sent");
};
