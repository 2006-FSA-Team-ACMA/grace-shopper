import React from 'react'
import {connect} from 'react-redux'
import SingleProduct from './single-product'
import {fetchProducts} from '../store/allProducts'
import {addToGuestCart} from '../store/guestCart'
import {fetchAddInCart} from '../store/userCart'

class AllProducts extends React.Component {
  async componentDidMount() {
    try {
      await this.props.getProducts()
    } catch (error) {
      console.error(error)
    }
  }
  render() {
    const isLoggedIn = this.props.isLoggedIn
    return (
      <div>
        <h3 className="allproducts">All Products</h3>
        <div className="productlist">
          {this.props.allProducts.map(product => {
            return isLoggedIn ? (
              <SingleProduct
                key={product.id}
                product={product}
                cart={this.props.addToUserCart}
                userId={this.props.userId}
              />
            ) : (
              <SingleProduct
                key={product.id}
                product={product}
                cart={this.props.addToGuestCart}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    allProducts: state.allProducts,
    isLoggedIn: !!state.user.id,
    userId: state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    getProducts: () => {
      dispatch(fetchProducts())
    },
    addToGuestCart: product => {
      dispatch(addToGuestCart(product))
    },
    addToUserCart: (product, userId) => {
      dispatch(fetchAddInCart(product, userId))
    }
  }
}

export default connect(mapState, mapDispatch)(AllProducts)
