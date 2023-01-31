import React from 'react'
import './Button.css'

const Button = ({name, changePage, page}) => {
  return(
    <div className="button-container">
      <button onClick={() => {
      changePage(page)
      }}>{name}</button>
    </div>
  )
}

export default Button;
