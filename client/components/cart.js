import React from 'react'
import {connect} from 'react-redux'
import {
  getGuestCart,
  deleteGuestCartItem,
  incrementQuantity,
  decrementQuantity,
  placeGuestOrder
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
    return cart && Object.keys(cart).length > 0 ? (
      <div>
        <span>
          <h3 className="title">YOUR CART</h3>
          <button
            type="button"
            className="title"
            onClick={() => this.props.placeGuestOrder(cart)}
          >
            Checkout
          </button>
        </span>
        {Object.keys(cart).map(key => {
          return (
            <div key={key}>
              <span className="product2">
                <div className="product3 title">
                  <h5 className="title"> {cart[key].name} </h5>
                </div>
                <div>
                  <img src={cart[key].imageUrl} />
                  <h5> ${cart[key].price}/each </h5>
                </div>
                <div className="product3 title">
                  <div className="product4 title">
                    <h5 className="product2">
                      <button
                        type="button"
                        className="title"
                        onClick={() => this.props.decrementQuantity(cart[key])}
                      >
                        -
                      </button>
                      <br />
                      <br />
                      <h1 className="title">Quantity {cart[key].quantity}</h1>

                      <button
                        type="button"
                        className="title"
                        onClick={() => this.props.incrementQuantity(cart[key])}
                      >
                        +
                      </button>
                    </h5>
                  </div>
                </div>
                <button
                  type="button"
                  className="title"
                  onClick={() => this.props.deleteGuestCartItem(cart[key])}
                >
                  Delete
                </button>
              </span>
              <br />
              <br />
            </div>
          )
        })}
        <button
          className="title"
          type="button"
          onClick={() => this.props.placeGuestOrder(cart)}
        >
          Checkout
        </button>
      </div>
    ) : (
      <h3>
        Your cart is empty. <p>Fill it up with some delicious noodles!</p>
      </h3>
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
    placeGuestOrder: order => dispatch(placeGuestOrder(order))
  }
}

export default connect(mapState, mapDispatch)(Cart)
