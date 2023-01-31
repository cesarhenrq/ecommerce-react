import React from 'react'
import Header from './Header.jsx'
import Title from './Title.jsx'
import Button from './Button.jsx'
import Footer from './Footer.jsx'
import Bag from './Bag.jsx'

const Cart = ({cart, totalQuantity, total, increaseQuantity, decreaseQuantity, changePage}) => {
    return(
      <section>
        <Header 
        title="Loja Virtual"                  source="../logo-arnia.png"/>
        <Title 
        title='Carrinho' 
        quantity={totalQuantity}
        display="block"/>
        {cart.map((bagItem, index) =>         (
        <Bag name={bagItem.name}
             price={bagItem.price}
             image={bagItem.image}
             quantity={bagItem.quantity}
             increaseQuantity={increaseQuantity}
             decreaseQuantity={decreaseQuantity}
             index={index}
             key={index}/>
        ))}
        <span>{`Total: R$${total}`}</span>
        <Button 
        changePage= {changePage}
        name="Finalizar compra"               page="payment"/>
        <Footer/>
      </section>
  )}

export default Cart