import React, { Component } from "react";
import './CreateGame.scss'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import {setGamePin} from '../../dux/reducer'

import io from 'socket.io-client'





class CreateGame extends Component {
  constructor(){
    super()

    this.state ={
      gamePin: '', 
    }
  }

  createGame = () => {
    const socket = io('http://localhost:4052')
    const {gamePin} = this.state
    this.props.setGamePin(gamePin);

    socket.emit('Create Game', {
      gamePin: gamePin
    })

    // axios.post('/api/newgame', {gamePin: gamePin}).then(res => {
    //   console.log('res at create game', res)
    //   this.setState({
    //     pin: res.data.gamePin
    //   })
    // })
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

const mapStateToProps = reduxState => {
  return {
    gamePin: reduxState.gamePin
  };
};

const mapDispatchToProps = {
  setGamePin: setGamePin
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateGame);
