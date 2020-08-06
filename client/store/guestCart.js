/**
 * ACTION TYPES
 */
const GET_GUEST_CART = 'GET_GUEST_CART'
const ADD_GUEST_CART = 'ADD_GUEST_CART'

/**
 * INITIAL STATE
 */
// const defaultCart = []

// Set default cart to a different value for testing
const defaultGuestCart = []

// [{id: 1, name: 'Indomie Mi Goreng', price: 1, imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/91iG5S-XqdL._SX569_PIbundle-30,TopRight,0,0_SX569SY439SH20_.jpg'}, {id: 2, name: 'Shin Ramyun', price: 2, imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81MYTNAsmQL._SX679_.jpg'}]
// [{id: 2, name: 'Shin Ramyun', price: 2, imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81MYTNAsmQL._SX679_.jpg'}]

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

/**
 * REDUCER
 */
export default function(state = defaultGuestCart, action) {
  switch (action.type) {
    case GET_GUEST_CART:
      return action.guestCart
    case ADD_GUEST_CART:
      return [...state, action.product]
    default:
      return state
  }
}
