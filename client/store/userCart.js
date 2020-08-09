// import axios from 'axios'
// import history from '../history'

// ACTION TYPE
const GET_USER_CART = 'GET_USER_CART'
const ADD_TO_USER_CART = 'ADD_TO_USER_CART'

const initialState = {
  addedProducts: [
    {
      id: 6,
      name: 'Blues',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
      price: 90
    }
  ],
  total: 0
}

// ACTION CREATOR

export const getUserCart = () => {
  return {
    type: GET_USER_CART
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
      return state.addedProducts
    case ADD_TO_USER_CART:
      console.log('add to user cart action', action)
      let existedProduct = state.addedProducts.find(
        product => action.product.id === product.id
      )
      if (existedProduct) {
        action.product.quantity += 1
        // console.log('ADDED ITEMS[]', state.addedProducts)
        // console.log('STATE TOTAL>>>', state.total)
        return {...state, total: state.total + action.product.price}
      } else {
        action.product.quantity = 1
        let newTotal = state.total + action.product.price
        // console.log('TOTAL>>>', state.total)
        // console.log('NEW TOTAL>>>', newTotal)
        return {
          ...state,
          addedProducts: [...state.addedProducts, action.product],
          total: newTotal
        }
      }
    default:
      return state
  }
}
