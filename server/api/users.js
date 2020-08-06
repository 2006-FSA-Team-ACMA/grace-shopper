const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

const isAdminMiddleware = (req, res, next) => {
  const currentUser = req.user
  if (currentUser && currentUser.isAdmin) {
    next()
  } else {
    const error = new Error('Nope')
    error.status = 401
    next(error)
  }
}

const isUserMiddleware = (req, res, next) => {
  const currentUser = req.user
  if (currentUser) {
    next()
  } else {
    const error = new Error('Nope')
    error.status = 401
    next(error)
  }
}

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
router.get('/:id', isUserMiddleware, async (req, res, next) => {
  try {
    const id = req.params.id
    const product = await User.findByPk(id, {
      attributes: ['id', 'firstName', 'lastName', 'email']
    })
    res.json(product)
  } catch (err) {
    next(err)
  }
})

// //POST Single "new" User

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
router.put('/:id', isUserMiddleware, async (req, res, next) => {
  try {
    const {id} = req.params
    const {firstName, lastName, email, password} = req.body
    const user = await User.findByPk(id)
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
router.delete('/:id', isAdminMiddleware, async (req, res, next) => {
  try {
    const {id} = req.params
    const user = await User.findByPk(id)
    await user.destroy()
    res.json('hey, deleted')
  } catch (err) {
    console.log(err)
    next(err)
  }
})
