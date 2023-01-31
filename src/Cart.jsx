import React from 'react'
import Header from './Header.jsx'
import Title from './Title.jsx'
import Product from './Product.jsx'
import Button from './Button.jsx'
import Footer from './Footer.jsx'

class Cart extends React.Component {
  constructor(props){
    super(props)
    
    
    this.state = {
      quantity: 0,
      cartGames: this.props.cartGames
    }
  }
  
  render(){
    return(
      <section>
        <Header/>
        <Title/>
      </section>
  )}
}

export default Cart