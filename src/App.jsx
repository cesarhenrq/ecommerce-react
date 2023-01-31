import React from 'react';
import './App.css';
import Home from './Home.jsx';
import Cart from './Cart.jsx';
import Payment from './Payment.jsx';
  
class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      page: 'home',
      cart: [],
      totalQuantity: 0,
      total: 0
    };
  };

  changePage = (pageState) => {
    this.setState({
      page: pageState
    });
  };

  addGame = (game) => {
    this.setState({ 
  cart: [...this.state.cart, game]
      }, () => { this.calculateTotalQuantity();
this.calculateTotal(); 
               });
  };

  removeGame = (index) => {
    this.setState({
      cart: this.state.cart.splice(index, 1)
    },() => { this.calculateTotalQuantity();
this.calculateTotal(); 
            });
  };

  componentDidMount() {
    this.calculateTotal(),
    this.calculateTotalQuantity()
  }

  increaseQuantity = (index) => {
    this.setState(prevState => {
      const updatedCart = prevState.cart.map((cartItem, indexItem) => {
        if(index === indexItem) {
          return {...cartItem, quantity: cartItem.quantity + 1}
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
      const filteredCart = updatedCart.filter(
        cartItem => cartItem.quantity !== 0
      );
      return {cart: filteredCart}
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
    if(this.state.page === 'home') {
      return (
        <main>
         <Home 
           changePage={this.changePage}
           addGame={this.addGame}
           removeGame={this.removeGame}/>
        </main>
      )
    } else if(this.state.page === 'cart') {
      return (
        <main>
          <Cart 
          cart={this.state.cart}
          changePage={this.changePage}
          increaseQuantity={this.increaseQuantity}
          decreaseQuantity={this.decreaseQuantity}
          total={this.state.total}
          totalQuantity={this.state.totalQuantity}/>
        </main>
      )
    } else if(this.state.page === 'payment') {
      return (
        <main>
          <Payment 
          cart={this.state.cart}
          total={this.state.total}
          totalQuantity={this.state.totalQuantity}
            />
        </main>
      )
    }
  }
}

export default App

