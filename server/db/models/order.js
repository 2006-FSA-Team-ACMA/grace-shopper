const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  status: {
    type: Sequelize.ENUM('complete', 'incomplete'),
    allowNull: false
  }
})

module.exports = Order
