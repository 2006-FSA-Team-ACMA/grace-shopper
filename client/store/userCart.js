// import axios from 'axios'
// import history from '../history'

// ACTION TYPE
const GET_USER_CART = 'GET_USER_CART'
const ADD_TO_USER_CART = 'ADD_TO_USER_CART'

const initialState = {
  products: [
    {
      id: 1,
      name: 'Winter body',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
      price: 110
    },
    {
      id: 2,
      name: 'Adidas',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
      price: 80
    },
    {
      id: 3,
      name: 'Vans',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
      price: 120
    },
    {
      id: 4,
      name: 'White',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
      price: 260
    },
    {
      id: 5,
      name: 'Cropped-sho',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
      price: 160
    },
    {
      id: 6,
      name: 'Blues',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
      price: 90
    }
  ],
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
      return action.cart
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

// const cartReducer = (state = initState, action) => {
// switch(action.type){
// case ADD_TO_USER_CART:
//   let addedItem = state.items.
// return state
// default:
// return state
// }

// const cartReducer= (state = initialState,action)=>{

//   //INSIDE HOME COMPONENT
//   if(action.type === ADD_TO_CART){
//         let addedItem = state.items.find(item=> item.id === action.id)
//         //check if the action id exists in the addedItems
//        let existed_item= state.addedItems.find(item=> action.id === item.id)
//        if(existed_item)
//        {
//           addedItem.quantity += 1
//            return{
//               ...state,
//                total: state.total + addedItem.price
//                 }
//       }
//        else{
//           addedItem.quantity = 1;
//           //calculating the total
//           let newTotal = state.total + addedItem.price

//           return{
//               ...state,
//               addedItems: [...state.addedItems, addedItem],
//               total : newTotal
//           }

//       }
//   }
//   else{
//       return state
//   }
// }

// export default cartReducer
