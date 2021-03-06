import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_PRODUCTS = 'GET_PRODUCTS'

/**
 * INITIAL STATE
 */
const defaultProducts = []

/**
 * ACTION CREATORS
 */
const getProducts = products => ({type: GET_PRODUCTS, products})

/**
 * THUNK CREATORS
 */
export const fetchProducts = () => async dispatch => {
  try {
    const {data: products} = await axios.get('/api/products')
    dispatch(getProducts(products))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultProducts, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products
    default:
      return state
  }
}
