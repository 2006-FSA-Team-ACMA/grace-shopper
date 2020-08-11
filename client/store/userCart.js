import axios from 'axios'
// import history from '../history'

// ACTION TYPE
const GET_USER_CART = 'GET_USER_CART'
// const ADD_TO_USER_CART = 'ADD_TO_USER_CART'

//this is userCart
export const initialState = []

// ACTION CREATOR

export const getUserCart = cart => {
  return {
    type: GET_USER_CART,
    cart
  }
}

// FETCHES USER'S COMPLETE ORDERS
export const fetchUserCart = userId => async dispatch => {
  try {
    const {data: orders} = await axios.get(`/api/users/${userId}/orders`)
    dispatch(getUserCart(orders))
  } catch (error) {
    console.error(error)
  }
}

export const fetchAddToCart = (product, userId) => async dispatch => {
  try {
    await axios.post(`/api/users/${userId}/orders`, product)
    dispatch(fetchUserCart(userId))
  } catch (error) {
    console(error)
  }
}

// Reducer
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER_CART:
      return action.cart
    // case ADD_TO_USER_CART:
    // newState.push(action.product)
    // let existedProduct = state.addedProducts.find(
    //   (product) => action.product.id === product.id
    // )
    // if (existedProduct) {
    //   action.product.quantity += 1
    //   console.log('STATE TOTAL>>>', state.total)
    //   return {...state, total: state.total + action.product.price}
    // } else {
    //   action.product.quantity = 1
    //   let newTotal = state.total + action.product.price

    //   const result = {
    //     ...state,
    //     addedProducts: [...state.addedProducts, action.product],
    //     total: newTotal,
    //   }
    //   console.log('RESULT>>>', result)
    //   return result
    // }
    default:
      return state
  }
}
