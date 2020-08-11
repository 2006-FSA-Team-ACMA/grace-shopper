import React from 'react'
import {connect} from 'react-redux'
import {fetchProduct} from '../store/singleProduct'
import {addToGuestCart} from '../store/guestCart'
import {fetchAddInCart} from '../store/userCart'

class SingleProductDetail extends React.Component {
  async componentDidMount() {
    try {
      const productId = this.props.match.params.id
      await this.props.getProduct(productId)
    } catch (error) {
      console.error('error')
    }
  }

  render() {
    const product = this.props.product || {}
    const {isLoggedIn} = this.props
    return (
      <div className="product">
        <img src={product.imageUrl} />
        <div>{product.name}</div>
        <div> ${product.price} </div>
        {isLoggedIn && (
          <button
            type="button"
            onClick={() =>
              this.props.addToUserCart(product, this.props.user.id)
            }
          >
            Add to Cart
          </button>
        )}
        {!isLoggedIn && (
          <button
            type="button"
            onClick={() => this.props.addToGuestCart(product)}
          >
            Add to Cart
          </button>
        )}
        <div>{product.description}</div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    product: state.singleProduct,
    isLoggedIn: !!state.user.id,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    getProduct: id => dispatch(fetchProduct(id)),
    addToGuestCart: product => {
      dispatch(addToGuestCart(product))
    },
    addToUserCart: (product, userId) =>
      dispatch(fetchAddInCart(product, userId))
  }
}

export default connect(mapState, mapDispatch)(SingleProductDetail)
