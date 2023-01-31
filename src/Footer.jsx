import React from 'react'
import './Footer.css'

const Footer = () => {
  return(
    <footer>
      <div>Formas de pagamento:</div>
      <figure>
        <img src="../visa-logo.png" alt="Logo da visa"/>
        <img src="../mastercard-logo.png" alt="Logo do MasterCard"/>
        <img src="../boleto.png" alt="Logo do Boleto"/>
        <img src="../hipercard-logo.png" alt="Logo do HiperCard"/>
      </figure>
    </footer>
  )
}

export default Footer;