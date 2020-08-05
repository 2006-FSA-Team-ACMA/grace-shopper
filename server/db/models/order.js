const Sequelize = require('sequelize')
const db = require('../db')
const {COMPLETE, INCOMPLETE} = require('./modelVar')

const Order = db.define('order', {
  status: {
    type: Sequelize.ENUM(COMPLETE, INCOMPLETE),
    allowNull: false,
    defaultValue: INCOMPLETE
  }
})

module.exports = Order
