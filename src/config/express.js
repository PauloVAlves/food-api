const express    = require('express');
const bodyParser = require('body-parser');

module.exports = () => {
  const app = express();

  
  app.set('port', process.env.PORT || 5000);

  
  app.use(bodyParser.json());

  require('../routes/food.js')(app);

  return app;
};