import React from 'react'
import Header from './Header.jsx'
import Title from './Title.jsx'
import Product from './Product.jsx'
import Button from './Button.jsx'
import Footer from './Footer.jsx'
import './Home.css'


const games = [{
  name: "DOOM",
  price: 10.50,
  image: "https://sm.ign.com/ign_br/screenshot/default/h322i2jcrukgb6pgi28a_pqng.jpg"
  ,quantity: 1
},{
  name: "DOOM",
  price: 10.50,
  image: "https://sm.ign.com/ign_br/screenshot/default/h322i2jcrukgb6pgi28a_pqng.jpg",
  quantity: 1
},{
  name: "DOOM",
  price: 10.50,
  image: "https://sm.ign.com/ign_br/screenshot/default/h322i2jcrukgb6pgi28a_pqng.jpg",
  quantity: 1
}]

class Home extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      quantity: 0, 
    }
  }

  addProduct = (game) => {
    this.setState({
      quantity: this.state.quantity + 1
    })
    this.props.addGame(game)
  }

  removeProduct = (index) => {
    this.setState({
      quantity: this.state.quantity - 1
    })
    this.props.removeGame(index)
  }
    
  render() {
    return(
      <div className="home-container">
        <Header 
        source="../logo-arnia.png"            title="Loja Virtual"/>
        <Title 
        title="Produtos" 
        quantity={this.state.quantity}
        display="block"/>
        <section className="products-container">
        {games.map((game, index)=> (
      <Product 
      name={game.name} 
      price={game.price} 
      image={game.image}
      product={game}
      addProduct={this.addProduct} 
      removeProduct={this.removeProduct} 
      key={index}
        productIndex={index}/>))}
        </section>
        <Button name="Ir para o carrinho" changePage={this.props.changePage.bind(this)} page="cart"/>
        <Footer/>
      </div>
      )
  }
}

export default Home