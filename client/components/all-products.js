import React from 'react'
import {connect} from 'react-redux'

const AllProducts = props => {
  return (
    <div>
      <h3>All Products</h3>
      <img src={props.allProducts[0].imageUrl} />
      <div>{props.allProducts[0].name}</div>
      {/* for each element generate <SingleProduct /> */}
    </div>
  )
}

const mapState = state => {
  return {
    allProducts: state.allProducts
  }
}

export default connect(mapState)(AllProducts)
