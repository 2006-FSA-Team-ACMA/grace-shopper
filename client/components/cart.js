import React from 'react'
import {connect} from 'react-redux'
import {
  getGuestCart,
  deleteGuestCartItem,
  incrementQuantity,
  decrementQuantity,
  guestCheckout
} from '../store/guestCart'

class Cart extends React.Component {
  componentDidMount() {
    try {
      this.props.getGuestCart()
    } catch (error) {
      console.error('error')
    }
  }

  render() {
    const cart = this.props.guestCart || {}

    return (
      <div>
        <h3>YOUR CART</h3>
        {Object.keys(cart).map(key => {
          return (
            <div key={key}>
              <h5> {cart[key].name} </h5>
              {/* <img src={cart[key].imageUrl} /> */}
              <h5> ${cart[key].price} </h5>

              <h5>
                <button
                  type="button"
                  onClick={() => this.props.decrementQuantity(cart[key])}
                >
                  -
                </button>
                Quantity: {cart[key].quantity}
                <button
                  type="button"
                  onClick={() => this.props.incrementQuantity(cart[key])}
                >
                  +
                </button>
              </h5>

              <button
                type="button"
                onClick={() => this.props.deleteGuestCartItem(cart[key])}
              >
                Delete
              </button>
              <br />
              <br />
            </div>
          )
        })}
        <button type="button" onClick={this.props.guestCheckout}>
          Checkout
        </button>
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
    getGuestCart: () => dispatch(getGuestCart()),
    deleteGuestCartItem: product => dispatch(deleteGuestCartItem(product)),
    incrementQuantity: product => dispatch(incrementQuantity(product)),
    decrementQuantity: product => dispatch(decrementQuantity(product)),
    guestCheckout: () => dispatch(guestCheckout())
  }
}

export default connect(mapState, mapDispatch)(Cart)
