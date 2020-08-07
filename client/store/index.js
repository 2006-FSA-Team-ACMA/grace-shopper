import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import allProducts from './allProducts'
import singleProduct from './singleProduct'
import guestCart from './guestCart'
import userCart from './userCart'

const reducer = combineReducers({
  user,
  allProducts,
  singleProduct,
  guestCart,
  userCart
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
