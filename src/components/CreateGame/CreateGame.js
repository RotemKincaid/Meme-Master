import React, { Component } from "react";
import './CreateGame.scss'
import {Link} from 'react-router-dom'
import axios from 'axios'

class CreateGame extends Component {
  constructor(){
    super()

    this.state ={
      game: null,
      gamePin: '', 
    }
  }

  createGame = () => {
    const {gamePin} = this.state
    axios.post('/api/newgame', {gamePin: gamePin}).then(res => {
      console.log('res at create game', res)
      this.setState({
        pin: res.data.gamePin
      })
    })
  }
  render() {
    console.log(this.state)
    
   
    return( 
    <div className='creategame'>This is CreateGame Component!
      <h1>Create game pin:</h1>
      <input 
        type='text'
        onChange={(e) => this.setState({gamePin: e.target.value})}
        value={this.state.gamePin}
      />
      <button onClick={this.createGame}>Submit</button>
      {this.state.gamePin.length ? (
        <h2>{this.state.gamePin}</h2>
      ):(
        <h2>'pin will go here'</h2>
      )}
      <Link  to='/createuser'><button>NEXT</button></Link>
    
    </div>
    );
  }
}

export default CreateGame;
