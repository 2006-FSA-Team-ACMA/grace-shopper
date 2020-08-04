import React from 'react'

const SingleProduct = props => {
  const product = props.product
  return (
    <div className="product">
      <img src={product.imageUrl} />
      <div>{product.name}</div>
      <div> ${product.price} </div>
      <button>Add to Cart</button>
    </div>
  )
}

export default SingleProduct
