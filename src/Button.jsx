import React from 'react'
import './Button.css'

const Button = ({name, changePage, page, align}) => {
  return(
    <div 
    className="button-container"
    style={{textAlign: `${align}`}}>
      <button 
      onClick={() => {
      changePage(page)
      }}>        
        {name}
      </button>
    </div>
  )
}

export default Button;
