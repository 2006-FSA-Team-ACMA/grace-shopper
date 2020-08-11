// import axios from 'axios'
// import history from '../history'

// ACTION TYPE
const GET_USER_CART = 'GET_USER_CART'
const ADD_TO_USER_CART = 'ADD_TO_USER_CART'

//this is userCart
export const initialState = {
  addedProducts: [],
  total: 0
}

// ACTION CREATOR

export const getUserCart = cart => {
  return {
    type: GET_USER_CART,
    cart
  }
}

export const addToUserCart = product => {
  return {
    type: ADD_TO_USER_CART,
    product
  }
}

// Reducer
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER_CART:
      return state.cart
    case ADD_TO_USER_CART:
      console.log('add to user cart action', action)
      let existedProduct = state.addedProducts.find(
        product => action.product.id === product.id
      )
      if (existedProduct) {
        action.product.quantity += 1
        // console.log('ADDED ITEMS[]', state.addedProducts)
        console.log('STATE TOTAL>>>', state.total)
        return {...state, total: state.total + action.product.price}
      } else {
        action.product.quantity = 1
        let newTotal = state.total + action.product.price
        // console.log('TOTAL>>>', state.total)

        const result = {
          ...state,
          addedProducts: [...state.addedProducts, action.product],
          total: newTotal
        }
        console.log('RESULT>>>', result)
        return result
      }
    default:
      return state
  }
}
