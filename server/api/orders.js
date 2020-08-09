const router = require('express').Router()
const {Order} = require('../db/models')
const {isAdminMiddleware} = require('./middleware')
module.exports = router

// GET All orders
router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll({})
    res.json(orders)
  } catch (err) {
    next(err)
  }
})

// GET Single order
router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const order = await Order.findByPk(id)
    res.json(order)
  } catch (err) {
    next(err)
  }
})

//POST Single "new" order
router.post('/', isAdminMiddleware, async (req, res, next) => {
  try {
    const {status, userId} = req.body
    const order = await Order.create({
      status,
      userId
    })
    res.status(201).json(order)
  } catch (err) {
    next(err)
  }
})

//PUT Single order
router.put('/:id', isAdminMiddleware, async (req, res, next) => {
  try {
    const {id} = req.params
    const {status, userId} = req.body
    const order = await Order.findByPk(id)
    const updated = await order.update({
      status,
      userId
    })
    res.json(updated)
  } catch (err) {
    console.log(err)
    next(err)
  }
})

//DELETE Single order
router.delete('/:id', isAdminMiddleware, async (req, res, next) => {
  try {
    const {id} = req.params
    const order = await Order.findByPk(id)
    await order.destroy()
    res.json('order deleted')
  } catch (err) {
    console.log(err)
    next(err)
  }
})
