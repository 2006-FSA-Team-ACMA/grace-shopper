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

const isSameUserMiddleware = (req, res, next) => {
  const {id} = req.params
  const currentUserId = req.user.id

  if (Number(id) === currentUserId) {
    next()
  } else {
    const error = new Error('Nope')
    error.status = 401
    next(error)
  }
}

module.exports = {isAdminMiddleware, isSameUserMiddleware}
