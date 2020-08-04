import React from 'react'

const SingleProductDetail = props => {
  const product = props.product
  return (
    <div className="product">
      <img src={product.imageUrl} />
      <div>{product.name}</div>
      <div> ${product.price} </div>
      <button type>Add to Cart</button>
      <div>{product.description}</div>
    </div>
  )
}

export default SingleProductDetail
