import React from 'react'
import './Footer.css'

const Footer = () => {
  return(
    <footer>
      <div>Formas de pagamento:</div>
      <figure className="footer-images">
        <img 
        src="../visa-logo.png"                alt="Logo da visa"
        className="imgs"/>
        <img 
        src="../mastercard-logo.png"          alt="Logo do MasterCard"
        className="imgs"/>
        <img 
        src="../boleto.png" 
        alt="Logo do Boleto"
        className="imgs"/>
        <img 
        src="../hipercard-logo.png"           alt="Logo do HiperCard"
        className="imgs"/>
      </figure>
    </footer>
  )
}

export default Footer;