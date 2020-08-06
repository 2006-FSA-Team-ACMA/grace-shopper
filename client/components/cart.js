import React from 'react'
import {connect} from 'react-redux'
import {getGuestCart} from '../store/guestCart'

class Cart extends React.Component {
  componentDidMount() {
    try {
      this.props.getGuestCart()
    } catch (error) {
      console.error('error')
    }
  }

  render() {
    const cart = this.props.guestCart || []

    return (
      <div>
        <h3>YOUR CART</h3>
        {cart.map(item => {
          return (
            <div key={item.id}>
              <h5> {item.name} </h5>
              {/* <img src={item.imageUrl} /> */}
              <h5> ${item.price} </h5>
              <br />
              <br />
            </div>
          )
        })}
      </div>
    )
  }
}

const mapState = state => {
  return {
    guestCart: state.guestCart
  }
}

const mapDispatch = dispatch => {
  return {
    getGuestCart: () => dispatch(getGuestCart())
  }
}

export default connect(mapState, mapDispatch)(Cart)
