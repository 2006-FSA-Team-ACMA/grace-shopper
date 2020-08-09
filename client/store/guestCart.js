/**
 * ACTION TYPES
 */
const GET_GUEST_CART = 'GET_GUEST_CART'
const ADD_GUEST_CART = 'ADD_GUEST_CART'
const DELETE_GUEST_CART_ITEM = 'DELETE_GUEST_CART_ITEM'
const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY'
const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY'
const GUEST_CHECKOUT = 'GUEST_CHECKOUT'

/**
 * INITIAL STATE
 */

// Set default cart to a different value for testing
const defaultGuestCart = {}

/**
 * ACTION CREATORS
 */

export const getGuestCart = () => {
  const guestCart =
    JSON.parse(window.localStorage.getItem('guestCart')) || defaultGuestCart
  return {type: GET_GUEST_CART, guestCart}
}

export const addToGuestCart = product => {
  return {type: ADD_GUEST_CART, product}
}

export const incrementQuantity = product => {
  return {type: INCREMENT_QUANTITY, product}
}

export const decrementQuantity = product => {
  return {type: DECREMENT_QUANTITY, product}
}

export const deleteGuestCartItem = product => {
  return {type: DELETE_GUEST_CART_ITEM, product}
}

export const guestCheckout = () => ({
  type: GUEST_CHECKOUT
})

/**
 * REDUCER
 */
export default function(state = defaultGuestCart, action) {
  switch (action.type) {
    case GET_GUEST_CART:
      return action.guestCart
    case ADD_GUEST_CART:
      const newCart = {...state, [action.product.id]: action.product}
      if (state[action.product.id]) {
        newCart[action.product.id].quantity =
          newCart[action.product.id].quantity + 1
      } else {
        newCart[action.product.id].quantity = 1
      }
      window.localStorage.setItem('guestCart', JSON.stringify(newCart))
      return newCart
    case INCREMENT_QUANTITY:
      const incrementCart = {...state}
      incrementCart[action.product.id].quantity =
        incrementCart[action.product.id].quantity + 1
      window.localStorage.setItem('guestCart', JSON.stringify(incrementCart))
      return incrementCart
    case DECREMENT_QUANTITY:
      const decrementCart = {...state}
      decrementCart[action.product.id].quantity =
        decrementCart[action.product.id].quantity - 1
      window.localStorage.setItem('guestCart', JSON.stringify(decrementCart))
      return decrementCart
    case DELETE_GUEST_CART_ITEM:
      const deletedCart = {...state}
      delete deletedCart[action.product.id]
      window.localStorage.setItem('guestCart', JSON.stringify(deletedCart))
      return deletedCart
    case GUEST_CHECKOUT:
      const checkoutGuestCart = {}
      window.localStorage.setItem(
        'guestCart',
        JSON.stringify(checkoutGuestCart)
      )
      return checkoutGuestCart
    default:
      return state
  }
}
