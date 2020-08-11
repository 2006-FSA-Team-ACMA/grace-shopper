import React from 'react'
import {Link} from 'react-router-dom'

const SingleProduct = props => {
  const product = props.product
  const userId = props.userId
  return (
    <div className="product">
      <Link to={`/products/${product.id}`}>
        <img src={product.imageUrl} />
        <div>{product.name}</div>
      </Link>
      <div> ${product.price} </div>
      <button type="button" onClick={() => props.cart(product, userId)}>
        Add to Cart
      </button>
    </div>
  )
}

export default SingleProduct
