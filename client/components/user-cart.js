//////////////////////////////////

import React, {Component} from 'react'
import {connect} from 'react-redux'
// import { Link } from 'react-router-dom'
import {getUserCart} from '../store/userCart'
import {store} from '../store'

class UserCart extends Component {
  async componentDidMount(getState) {
    try {
      const res = await this.props
      console.log('store>>>>>', res)
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    console.log('RENDERING???', this.props.items)
    let addedProducts = this.props.items.length ? (
      this.props.items.map(item => {
        return (
          <li className="collection-item avatar" key={item.id}>
            <h1>LENGTH EXISTS::::</h1>
            <div className="item-img">
              <img src={item.imageUrl} alt={item.imageUrl} className="" />
            </div>

            <div className="item-desc">
              <span className="title">{item.name}</span>
              <p>{item.description}</p>
              <p>
                <b>Price: {item.price}$</b>
              </p>
              <p>
                <b>Quantity: {item.quantity}</b>
              </p>
              <button
                type="button"
                className="waves-effect waves-light btn pink remove"
              >
                Remove
              </button>
            </div>
          </li>
        )
      })
    ) : (
      <p>Nothing.</p>
    )
    return (
      <div className="container">
        <div className="UserCart">
          <h5>You have ordered:</h5>
          <ul className="collection">{addedProducts}</ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('MSTP>>>>>')
  console.log('state', state.userCart.addedProducts)
  return {
    items: state.userCart.addedProducts,
    getState: state.getState
  }
}

// const mapDispatchToProps = dispatch => {
//   console.log('.........>>>>>>')
//   return {
//     getUserCart: () => dispatch(getUserCart())
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(UserCart)
export default connect(mapStateToProps)(UserCart)
