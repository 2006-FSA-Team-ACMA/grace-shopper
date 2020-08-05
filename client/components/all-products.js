import React from 'react'
import {connect} from 'react-redux'
import SingleProduct from './single-product'
import {fetchProducts} from '../store/allProducts'

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
            return <SingleProduct key={product.id} product={product} />
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
    }
  }
}

export default connect(mapState, mapDispatch)(AllProducts)
