import React from 'react';
import './Header.css';

const Header = ({source, title}) => {
  return(
      <header className="header-container">
        <figure className="figure-container">
          <img src={source} alt="Logo da empresa arnia" className="logo-header-figure"/>
        </figure>
        <h1 className="page-title">{title}</h1>
      </header>
    )
}

export default Header