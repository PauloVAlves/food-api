const { isNaN } = require('lodash')

const idIsValid = id => !isNaN(parseInt(id, 10));

module.exports = { idIsValid };