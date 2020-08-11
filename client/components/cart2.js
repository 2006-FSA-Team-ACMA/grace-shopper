import React from 'react'
import {connect} from 'react-redux'
import {
  getGuestCart,
  incrementQuantity,
  decrementQuantity
} from '../store/guestCart'
import {
  fetchUserCart,
  fetchAddInCart,
  fetchReduceInCart,
  deleteUserCartItem,
  userCartCheckout
} from '../store/userCart'

class Cart2 extends React.Component {
  componentDidMount() {
    try {
      this.props.getGuestCart()
      this.props.getUserCart(this.props.userId)
    } catch (error) {
      console.error('error')
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.userId !== prevProps.userId) {
      const asyncGet = async () => {
        await this.props.getUserCart(this.props.userId)
      }
      asyncGet()
    }
  }

  render() {
    const cart = this.props.userCart || []
    const userId = this.props.userId
    return cart && cart.length > 0 ? (
      <div>
        <h3>YOUR CART</h3>
        {cart.map(item => {
          return (
            <div key={item.id}>
              <h5> {item.name} </h5>
              {/* <img src={cart.imageUrl} /> */}
              <h5> ${item.price} </h5>

              <h5>
                <button
                  type="button"
                  onClick={() => this.props.decrementFromCart(item, userId)}
                >
                  -
                </button>
                Quantity: {item.order_item.quantity}
                <button
                  type="button"
                  onClick={() => this.props.incrementAddToCart(item, userId)}
                >
                  +
                </button>
              </h5>

              <button
                type="button"
                onClick={() => this.props.deleteUserCartItem(item, userId)}
              >
                Delete
              </button>
              <br />
              <br />
            </div>
          )
        })}
        {
          <button
            type="button"
            onClick={() =>
              this.props.userCartCheckout(
                userId,
                this.props.userCart[0].order_item.orderId
              )
            }
          >
            Checkout
          </button>
        }
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
    userCart: state.userCart,
    user: state.user,
    userId: state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    getGuestCart: () => dispatch(getGuestCart()),
    incrementQuantity: product => dispatch(incrementQuantity(product)),
    decrementQuantity: product => dispatch(decrementQuantity(product)),
    getUserCart: id => dispatch(fetchUserCart(id)),

    incrementAddToCart: (product, userId) =>
      dispatch(fetchAddInCart(product, userId)),
    decrementFromCart: (product, userId) =>
      dispatch(fetchReduceInCart(product, userId)),
    deleteUserCartItem: (product, userId) =>
      dispatch(deleteUserCartItem(product, userId)),
    userCartCheckout: (userId, orderId) =>
      dispatch(userCartCheckout(userId, orderId))
  }
}

export default connect(mapState, mapDispatch)(Cart2)
