const Sequelize = require('sequelize')
const db = require('../db')

const Order_Item = db.define('order_item', {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
    validate: {
      notEmpty: true
    }
  },
  purchasePrice: {
    type: Sequelize.INTEGER
  }
})

module.exports = Order_Item
