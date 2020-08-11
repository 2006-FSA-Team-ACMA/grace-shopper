const router = require('express').Router()
const {User, Order, Order_Item, Product} = require('../db/models')
const {isAdminMiddleware, isSameUserMiddleware} = require('./middleware')
module.exports = router

// GET All Users
router.get('/', isAdminMiddleware, async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['firstName', 'lastName', 'id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

// GET Single User
router.get('/:userId', isSameUserMiddleware, async (req, res, next) => {
  try {
    const {userId} = req.params
    const product = await User.findByPk(userId, {
      attributes: ['id', 'firstName', 'lastName', 'email']
    })
    res.json(product)
  } catch (err) {
    next(err)
  }
})

// POST Single "new" User
router.post('/', async (req, res, next) => {
  try {
    const {firstName, lastName, email, password} = req.body
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password
    })
    res.status(201).json(newUser)
  } catch (err) {
    next(err)
  }
})

// PUT Single User
router.put('/:userId', isSameUserMiddleware, async (req, res, next) => {
  try {
    const {userId} = req.params
    const {firstName, lastName, email, password} = req.body
    const user = await User.findByPk(userId)
    const updated = await user.update({
      firstName,
      lastName,
      email,
      password
    })
    res.json(updated)
  } catch (err) {
    console.log(err)
    next(err)
  }
})

// //DELETE Single User
router.delete('/:userId', isAdminMiddleware, async (req, res, next) => {
  try {
    const {userId} = req.params
    const user = await User.findByPk(userId)
    await user.destroy()
    res.json('hey, deleted')
  } catch (err) {
    console.log(err)
    next(err)
  }
})

// GET single user's incomplete orders
router.get('/:userId/orders', async (req, res, next) => {
  try {
    const {userId} = req.params
    const incompleteOrder = await Order.findOne({
      where: {userId: userId, status: 'INCOMPLETE'},
      include: {model: Product}
    })
    res.json(incompleteOrder.products)
  } catch (err) {
    console.log(err)
    next(err)
  }
})

router.post('/:userId/orders', async (req, res, next) => {
  try {
    const {item: product, quantity} = req.body
    console.log('QUANTITY >>>> ', quantity)
    const {userId} = req.params
    const incompleteOrder = await Order.findOne({
      where: {userId: userId, status: 'INCOMPLETE'},
      include: {model: Product}
    })
    console.log('INCOMPLETE ORDER ID >>>> ', incompleteOrder.id)
    console.log('INCOMPLETE PRODUCT ID >>>> ', product.id)
    let newOrderItem = await Order_Item.findOrCreate({
      where: {orderId: incompleteOrder.id, productId: product.id},
      defaults: {
        quantity: 1
      }
    })
    await newOrderItem[0].update({quantity: quantity})

    res.json(newOrderItem[0])
  } catch (err) {
    console.log(err)
    next(err)
  }
})
