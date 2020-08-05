const router = require('express').Router()
const {Product} = require('../db/models')
module.exports = router

// GET All Products
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll({})
    res.json(products)
  } catch (err) {
    next(err)
  }
})

// GET Single Product
router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const product = await Product.findByPk(id)
    res.json(product)
  } catch (err) {
    next(err)
  }
})

//POST Single "new" Product
router.post('/', async (req, res, next) => {
  try {
    const {name, imageUrl, spiceRating, price, description} = req.body
    const product = await Product.create({
      name,
      imageUrl,
      spiceRating,
      price,
      description
    })
    res.status(201).json(product)
  } catch (err) {
    next(err)
  }
})

//PUT Single Product
router.put('/:id', async (req, res, next) => {
  try {
    const {id} = req.params
    const {name, imageUrl, spiceRating, price, description} = req.body
    const product = await Product.findByPk(id)
    const updated = await product.update({
      name,
      imageUrl,
      spiceRating,
      price,
      description
    })
    res.json(updated)
  } catch (err) {
    console.log(err)
    next(err)
  }
})

//DELETE Single Product
router.delete('/:id', async (req, res, next) => {
  try {
    const {id} = req.params
    const product = await Product.findByPk(id)
    await product.destroy()
    res.json('hey, deleted')
  } catch (err) {
    console.log(err)
    next(err)
  }
})
