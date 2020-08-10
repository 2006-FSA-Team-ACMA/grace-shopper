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
    get() {
      return this.getDataValue('price') / 100
    },
    set(price) {
      this.setDataValue('price', price * 100)
    },
    allowNull: false,
    defaultValue: 0,
    validate: {
      min: 0
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
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 5
    }
  },
  inventory: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  }
})

module.exports = Product
