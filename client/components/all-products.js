import React from 'react'
import {connect} from 'react-redux'
import SingleProduct from './single-product'

const AllProducts = props => {
  return (
    <div>
      <h3>All Products</h3>
      <div className="productlist">
        {props.allProducts.map(product => {
          return <SingleProduct key={product.id} product={product} />
        })}
      </div>
    </div>
  )
}

const mapState = state => {
  return {
    allProducts: state.allProducts
  }
}

export default connect(mapState)(AllProducts)
