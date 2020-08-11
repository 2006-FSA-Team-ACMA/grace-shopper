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
    const {data: order} = await axios.get(`/api/users/${userId}/orders`)
    dispatch(getUserCart(order.products))
  } catch (error) {
    console.error(error)
  }
}

export const fetchAddInCart = (item, userId) => async dispatch => {
  let quantity
  if (item.order_item) {
    quantity = item.order_item.quantity + 1
  } else {
    quantity = 1
  }
  try {
    await axios.post(`/api/users/${userId}/orders`, {item, quantity})
    dispatch(fetchUserCart(userId))
  } catch (error) {
    console.error(error)
  }
}

export const fetchReduceInCart = (item, userId) => async dispatch => {
  const quantity = item.order_item.quantity - 1
  try {
    await axios.post(`/api/users/${userId}/orders`, {item, quantity})
    dispatch(fetchUserCart(userId))
  } catch (error) {
    console.error(error)
  }
}

export const deleteUserCartItem = (item, userId) => async dispatch => {
  try {
    const {data: order} = await axios.get(`/api/users/${userId}/orders`)
    console.log('CURRENT ORDER >>>> ', order)
    await axios.delete(
      `/api/users/${userId}/orders/${order.id}/items/${item.id}`
    )
    dispatch(fetchUserCart(userId))
  } catch (error) {
    console.error(error)
  }
}

// Reducer
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER_CART:
      return action.cart
    default:
      return state
  }
}
