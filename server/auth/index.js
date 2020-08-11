const router = require('express').Router()
const User = require('../db/models/user')
module.exports = router

// ADDED SESSION ID TO USER.ID
router.post('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({where: {email: req.body.email}})
    if (!user) {
      console.log('No such user found:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else if (!user.correctPassword(req.body.password)) {
      console.log('Incorrect password for user:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else {
      req.login(user, err => (err ? next(err) : res.json(user)))
    }
  } catch (err) {
    next(err)
  }
})

router.post('/signup', async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    req.login(user, err => (err ? next(err) : res.json(user)))
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    } else {
      next(err)
    }
  }
})

// SESSION ID IS DELETED
router.post('/logout', (req, res) => {
  req.logout()
  req.session.destroy()
  res.redirect('/')
})

router.get('/me', (req, res) => {
  res.json(req.user)
})

// router.get('/me', async (req, res, next) => {
//   try {
//     if (!req.session.userId) {
//       res.sendStatus(401)
//     } else {
//       const user = await User.findByPk(req.session.userId)
//       if (!user) {
//         res.sendStatus(401)
//       } else {
//         res.json(user)
//       }
//     }
//   } catch (error) {
//     next(error)
//   }
// })

router.use('/google', require('./google'))
