const express = require('express');
const cors = require('cors');


module.exports = () => {
  const expressApp = express();
  expressApp.use(cors());

  return expressApp;
}
