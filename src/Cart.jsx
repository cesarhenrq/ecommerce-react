import React from 'react'
import Header from './Header.jsx'
import Title from './Title.jsx'
import Button from './Button.jsx'
import Footer from './Footer.jsx'
import Bag from './Bag.jsx'

class Cart extends React.Component {
  constructor(props){
    super(props)
    
    
    this.state = {
      totalQuantity: 0,
      cart: this.props.cart,
      total: 0
    }
  }

  componentDidMount() {
    this.calculateTotal(),
    this.calculateTotalQuantity()
  }

  increaseQuantity = (index) => {
    this.setState(prevState => {
      const updatedCart = prevState.cart.map((cartItem, indexItem) => {
        if(index === indexItem) {               return {...cartItem, quantity: cartItem.quantity + 1}
        }
        return cartItem
      })
      return {cart: updatedCart}
    }, () => { this.calculateTotalQuantity()
this.calculateTotal()
  })
  }

  decreaseQuantity = (index) => {
    this.setState(prevState => {
      const updatedCart = prevState.cart.map((cartItem, indexItem) => {
        if(index === indexItem && cartItem.quantity > 0) {               return {...cartItem, quantity: cartItem.quantity - 1}
        }
        return cartItem
      })
      return {cart: updatedCart}
    }, () => { this.calculateTotalQuantity()
this.calculateTotal() })
  }

  calculateTotalQuantity = () => {
    const totalQuantity = this.state.cart.reduce(
      (acc, obj) => acc + obj.quantity,
      0)
    this.setState({totalQuantity})
  }

  calculateTotal = () => {
    const total = this.state.cart.reduce(
      (acc, obj) => acc + obj.quantity * obj.price,
      0
    );
    this.setState({total});
  };

  render(){
    return(
      <section>
        <Header title="Loja Virtual" source="../logo-arnia.png"/>
        <Title title='Carrinho' quantity={this.state.totalQuantity}/>
        {this.state.cart.map((bagItem, index) => (
        <Bag name={bagItem.name}
             price={bagItem.price}
             image={bagItem.image}
             quantity={bagItem.quantity}
             increaseQuantity={this.increaseQuantity}
             decreaseQuantity={this.decreaseQuantity}
             index={index}
             key={index}/>
))}
        <span>{`Total: R$${this.state.total}`}</span>
        <Button name="Finalizar compra" page="payment"/>
        <Footer/>
      </section>
  )}
}

export default Cart