const router = require('express').Router()
const {Order, Product} = require('../db/models')
const {isAdminMiddleware} = require('./middleware')
const Order_Item = require('../db/models/order_item')
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

// //POST Single "new" order
// router.post('/', async (req, res, next) => {
//   try {
//     const {status, userId} = req.body
//     const order = await Order.create({
//       status,
//       userId
//     })
//     res.status(201).json(order)
//   } catch (err) {
//     next(err)
//   }
// })

//POST Single "new" order
router.post('/guest', async (req, res, next) => {
  try {
    const createdOrder = await Order.create({
      status: 'COMPLETE',
      userId: null
    })
    Object.values(createdOrder).map(product =>
      Order_Item.create({
        orderId: createdOrder.id,
        productId: product.id,
        quantity: product.quantity
      })
    )
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
