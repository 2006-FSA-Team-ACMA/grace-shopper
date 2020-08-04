import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_PRODUCTS = 'GET_PRODUCTS'

/**
 * INITIAL STATE
 */
const defaultProducts = [
  {
    name: 'Birthday Cake',
    imageUrl:
      'https://wellsmanagedcontent.blob.core.windows.net/content/halo-top/product/small/103bc1d9-ba10-41ad-9f12-ae043969211a/birthday-cake.v2.png'
  },
  {
    name: 'Blueberry Crumble',
    imageUrl:
      'https://wellsmanagedcontent.blob.core.windows.net/content/halo-top/product/small/7b0d71b6-d9d1-44dc-9d7e-22d16e0d35c5/blueberry-crumble.v2.png'
  }
]

/**
 * ACTION CREATORS
 */
// const getProducts = (products) => ({type: GET_PRODUCTS, products})

/**
 * THUNK CREATORS
 */
// export const me = () => async dispatch => {
//   try {
//     const res = await axios.get('/auth/me')
//     dispatch(getUser(res.data || defaultUser))
//   } catch (err) {
//     console.error(err)
//   }
// }

/**
 * REDUCER
 */
export default function(state = defaultProducts, action) {
  switch (action.type) {
    // case GET_PRODUCTS:
    //   return action.products
    default:
      return state
  }
}
