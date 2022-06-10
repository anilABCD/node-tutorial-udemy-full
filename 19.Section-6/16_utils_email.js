const nodemailer = require("nodemailer");

exports.sendEmail = async (options) => {
  // 1. Create a transport ...
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // 2. Define the email options ...
  const mailOptions = {
    from: "Anil Kumar Potlapally <786.anil.potlapally@gmail.com",
    to: options.to,
    subject: options.subject,
    text: options.message,
    html: `<h1>Anil</h1><b style="color:green">${options.message}</b>`,
  };

  // 3. Actually send the email ...
  await transporter.sendMail(mailOptions);
};
