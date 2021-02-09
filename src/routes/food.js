const FoodController = require('../controllers/FoodController')
const { API_ROUTE } = require('../config/api');
const { idIsValid  } = require('../helpers/helper')


module.exports = app => {

  app.get(`${API_ROUTE}/food`, (_, res) =>
    res.json(FoodController.getFoodList())
  );

  app.get(`${API_ROUTE}/food/:id`, (req, res) => {
    const { id } = req.params;

    if (!idIsValid(id)) {
      res.status(400).json({
        message: 'Invalid Food ID',
      });
    }

    res.json(FoodController.getById(id));
  })
}