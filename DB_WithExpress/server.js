const express = require('express');

const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/config.env` });

const app = express();

app.listen(80, () => {
  console.log('Listening on port 80');
});

module.exports = app;
