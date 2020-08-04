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
    id: 1,
    name: 'Birthday Cake',
    imageUrl:
      'https://wellsmanagedcontent.blob.core.windows.net/content/halo-top/product/small/103bc1d9-ba10-41ad-9f12-ae043969211a/birthday-cake.v2.png',
    price: 4.99,
    description:
      "Here at Halo Top, we believe that rules are meant to be frozen. That's why we think you can eat the whole pint. Or not. All of the best parts of a birthday party pack themselves into one delectable pint of Birthday Cake light ice cream. A nostalgic twist with rainbow sprinkles and a good source of protein, you’ll enjoy every bite without having to sing Happy Birthday. And at 300 calories per pint, we aren’t blaming you."
  },
  {
    id: 2,
    name: 'Blueberry Crumble',
    imageUrl:
      'https://wellsmanagedcontent.blob.core.windows.net/content/halo-top/product/small/7b0d71b6-d9d1-44dc-9d7e-22d16e0d35c5/blueberry-crumble.v2.png',
    price: 4.99,
    description:
      "Here at Halo Top, we believe that rules are meant to be frozen. That's why we think you can eat the whole pint. Or not. Swirls of sweet blueberry pie filling and chunks of pie crust, our Blueberry Crumble ice cream delivers the best of spring with a good source of protein. Satisfy your sweet tooth with a pint of Blueberry Crumble that’s just 350 calories per pint."
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
