import React from 'react'
import {connect} from 'react-redux'
import {fetchProduct} from '../store/singleProduct'

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

    return (
      <div className="product">
        <img src={product.imageUrl} />
        <div>{product.name}</div>
        <div> ${product.price} </div>
        <button type="button">Add to Cart</button>
        <div>{product.description}</div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    product: state.singleProduct
  }
}

const mapDispatch = dispatch => {
  return {
    getProduct: id => dispatch(fetchProduct(id))
  }
}

export default connect(mapState, mapDispatch)(SingleProductDetail)
