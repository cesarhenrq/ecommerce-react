import React from 'react';
import './Bag.css';

const Bag = ({name, price, image, quantity, index, increaseQuantity, decreaseQuantity}) => {
  return(
    <div className="bag-container">
      <img 
      src={image} 
      alt={`game-${name}-poster`}/>
      <div className="info">
        <div>
          {name}
        </div>
        <div>
          {`Valor: R$${price}`}
        </div>
        <div>
          {`Quantidade: ${quantity}`}
        </div>
        <div className="buttons-container">
          <button 
          onClick={() => increaseQuantity(index)}
          className="button">+</button>
          <button 
          onClick={() => decreaseQuantity(index)}
          className="button">-</button>
        </div>
      </div>
    </div>
  )
}

export default Bag