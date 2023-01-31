import React from 'react'

const Bag = ({name, price, image, quantity, index, increaseQuantity, decreaseQuantity}) => {
  return(
    <div className="bag-container">
      <img src={image} alt={`game-${name}-poster`}/>
      <div className="info">
        <span>
          {name}
        </span>
        <span>
          {`Valor: R$${price}`}
        </span>
        <span>
          {`Quantidade: ${quantity}`}
        </span>
        <div className="buttons-container">
          <button onClick={() => increaseQuantity(index)}>+</button>
          <button onClick={() => decreaseQuantity(index)}>-</button>
        </div>
      </div>
    </div>
  )
}

export default Bag