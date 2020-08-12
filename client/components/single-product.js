import React from 'react'
import {Link} from 'react-router-dom'

const SingleProduct = props => {
  const product = props.product
  const userId = props.userId
  return (
    <div className="product">
      <Link to={`/products/${product.id}`}>
        <img src={product.imageUrl} />
        <div className="allproducts ">{product.name}</div>
      </Link>
      <div>
        <b className="allproducts ">${product.price}</b>{' '}
      </div>
      <button
        className="title"
        type="button"
        onClick={() => props.cart(product, userId)}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default SingleProduct
