import React from 'react';
import Header from './Header.jsx';
import Title from './Title.jsx';
import Button from './Button.jsx';
import Footer from './Footer.jsx';
import './Payment.css';

const Payment = ({cart, total, totalQuantity}) => {
  return(
    <section className="payment-container">
      <Header 
      source="../logo-arnia.png"            title="Loja Virtual"/>
      <Title 
      title="Checkout"                      display="none"/>
      <div>
        Produtos Escolhidos:
      </div>
      <figure 
      className="game-image-container">
      {cart.map((cartItem, index) => (
        <img 
        src={cartItem.image} 
        alt={`${cartItem.name}-poster`}
        className="game-image"
        key={`game-${index}`}/>
      ))}
      </figure>
      <div>
        {`Total produtos: ${totalQuantity}`}
      </div>
      <div>
        {`Total: R$${total}`}
      </div>
      <Button name="Confirmar compra" align="center"/>
      <Footer/>
    </section>
  );
};

export default Payment;