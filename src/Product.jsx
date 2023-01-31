import React from 'react'
import './Product.css'

const Product = ({name, price, image, addProduct, removeProduct, product, productIndex}) => {
  return(
    <div className="product-container">
      <figure className="product-image-container">
        <img 
        className="product-image" 
        alt={`${name} poster image`}
        src={image}/>
      </figure>
      <input type="checkbox" onClick={(event) => (event.target.checked ?addProduct(product) : removeProduct(0))}/>
      <span className="price">
      {`Valor: R$${price}`}
      </span>
    </div>
    )
}

export default Product;