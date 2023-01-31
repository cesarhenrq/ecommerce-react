import React from 'react'
import './Title.css'

const Title = ({quantity, title, display}) => {
  return(
    <div className="title-container">
      <h1 className="title">
        {title}
      </h1>
      <span 
      className="quantity-container"
      style={{display: `${display}`}}>         {quantity}
      </span>
    </div>
    )
}

export default Title