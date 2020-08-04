const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      'https://saqramart.com/resources/upload/products/thumbnail2/49698626.jpg',
    allowNull: false
  },
  spiceRating: {
    type: Sequelize.DECIMAL,
    validate: {
      min: 1,
      max: 5
    }
  }
})

module.exports = Product
