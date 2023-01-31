import React from 'react';
import Header from './Header.jsx';
import Title from './Title.jsx';
import Button from './Button.jsx';
import Footer from './Footer.jsx';

const Payment = ({cart, total, totalQuantity}) => {
  return(
    <section>
      <Header 
      source="../logo-arnia.png"            title="Loja Virtual"/>
      <Title 
      title="Checkout"                      display="none"/>
      <div>
        Produtos Escolhidos:
      </div>
      {cart.map((cartItem, index) => (
         <figure key={`game-${index}`}
           className="game-image-container">
           <img src={cartItem.image} alt={`${cartItem.name}-poster`}
           className="game-image"/>
         </figure>
      ))}
      <div>
        {`Total produtos: ${totalQuantity}`}
      </div>
      <div>
        {`Total: R$${total}`}
      </div>
      <Button name="Confirmar compra"/>
      <Footer/>
    </section>
  );
};

export default Payment;