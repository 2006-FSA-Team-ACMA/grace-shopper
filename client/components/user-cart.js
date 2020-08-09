//////////////////////////////////

import React from 'react'
// import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
// import {userCart} from '../store/userCart'

export class UserCart extends React.Component {
  render() {
    return <div>hello</div>
  }
}
//     console.log("props>>>", this.props)
//     let addedItems = this.props.addedProducts.length ?
//       (
//         this.props.addedProducts.map(item => {
//           return (

//             <li className="collection-item avatar" key={item.id}>
//               <div className="item-img">
//                 <img src={item.imageUrl} alt={item.imageUrl} className="" />
//               </div>

//               <div className="item-desc">
//                 <span className="title">{item.name}</span>
//                 <p>{item.description}</p>
//                 <p><b>Price: {item.price}$</b></p>
//                 <p>
//                   <b>Quantity: {item.quantity}</b>
//                 </p>
//                 <div className="add-remove">
//                   <Link to="/cart"><i className="material-icons">arrow_drop_up</i></Link>
//                   <Link to="/cart"><i className="material-icons">arrow_drop_down</i></Link>
//                 </div>
//                 <button type="button" className="waves-effect waves-light btn pink remove">Remove</button>
//               </div>

//             </li>
//           )
//         })
//       ) :

//       (
//         <p>Nothing.</p>
//       )
//     return (
//       <div className="container">
//         <div className="cart">
//           <h5>You have ordered:</h5>
//           <ul className="collection">
//             {addedItems}
//           </ul>
//         </div>
//       </div>
//     )
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     // items: state.addedItems,
//     addedProducts: state.addedProducts
//   }
// }

// export default connect(mapStateToProps)(UserCart)
