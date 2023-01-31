import React from 'react'
import './App.css'
import Home from './Home.jsx'
import Cart from './Cart.jsx'
  
class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      page: 'home',
      kartGames: []
    }
  }

  changePage = (pageState) => {
    this.setState({
      page: pageState
    })
  }

  addGame = (game) => {
    this.setState({ 
  kartGames: [...this.state.kartGames, game]
      })
  }

  removeGame = (index) => {
    this.setState({
      kartGames: this.state.kartGames.splice(index, 1)
    })  
  }


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
          <Cart/>
        </main>
      )
    }
  }
}

export default App

