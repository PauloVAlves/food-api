const { response } = require('express');
const foodList = require('../data/foods.json');

class Food {
  static getFoodList() {
    return foodList;
  }

  static getById(id) {
    return foodList.filter(
      (food) => (food.id.toString() === id.toString())
    )
  }
}

module.exports = Food;