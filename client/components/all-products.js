import React from 'react'
import {connect} from 'react-redux'
import SingleProduct from './single-product'
import {fetchProducts} from '../store/allProducts'
import {addToGuestCart} from '../store/guestCart'

class AllProducts extends React.Component {
  async componentDidMount() {
    try {
      await this.props.getProducts()
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div>
        <h3>All Products</h3>
        <div className="productlist">
          {this.props.allProducts.map(product => {
            return (
              <SingleProduct
                key={product.id}
                product={product}
                addToGuestCart={this.props.addToGuestCart}
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
    allProducts: state.allProducts
  }
}

const mapDispatch = dispatch => {
  return {
    getProducts: () => {
      dispatch(fetchProducts())
    },
    addToGuestCart: product => {
      dispatch(addToGuestCart(product))
    }
  }
}

export default connect(mapState, mapDispatch)(AllProducts)
