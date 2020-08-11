import React, {Component} from 'react'
import {connect} from 'react-redux'
// import { Link } from 'react-router-dom'
import {fetchUserCart} from '../store/userCart'
// import { me } from '../store/user'

class UserCart extends Component {
  async componentDidMount() {
    try {
      await this.props.getUserCart(this.props.userId)
    } catch (err) {
      console.error(err)
    }
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.userId !== prevProps.userId) {
      const asyncGet = async () => {
        await this.props.getUserCart(this.props.userId)
      }
      asyncGet()
    }
  }

  render() {
    const userCart = this.props.userCart || []
    return (
      <div>
        <h3>YOUR USER CART</h3>

        {userCart.map(item => {
          return (
            <div key={item.key}>
              <h5> {item.name} </h5>
              {/* <img src={cart[key].imageUrl} /> */}
              <h5> ${item.price} </h5>

              <h5>
                <button
                  type="button"
                  // onClick={() => this.props.decrementQuantity(cart[key])}
                >
                  -
                </button>
                Quantity: {item.order_item.quantity}
                <button
                  type="button"
                  // onClick={() => this.props.incrementQuantity(cart[key])}
                >
                  +
                </button>
              </h5>

              <button
                type="button"
                // onClick={() => this.props.deleteGuestCartItem(cart[key])}
              >
                Delete
              </button>
              <br />
              <br />
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userCart: state.userCart,
    userId: state.user.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUserCart: userId => dispatch(fetchUserCart(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserCart)
