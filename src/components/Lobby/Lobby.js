import React, { Component } from "react";
import {Link} from 'react-router-dom'
import './Lobby.scss'
import io from 'socket.io-client'
import {connect} from 'react-redux'
import {setGamePin} from '../../dux/reducer'

const socket = io('http://localhost:4052')

class Lobby extends Component {
  constructor(){
    super()

    this.state = {
      message: '',
      joined: false
    };

    socket.on('welcome', data => {
      console.log(data);
      this.setState({
          message: data
      });
    });

    
  }

  componentDidMount(){
    
    //get game pin and join room 
    const {gamePin} = this.props.gamePin
    console.log('gamePin from props at component did mount', gamePin)
    socket.emit('Join Game', {
      gamePin: gamePin
    })

  }
  render() {
    console.log('props at lobby', this.props)
    return (
    <div className='lobby'>This is Lobby Component!
      <h1>PLAYERS</h1>
      <div>
        'this will display the players list as they join'

      </div>
      <button><Link className='link' to='/playerview'>CLICK WHEN YOU ARE READY! -playerview-</Link></button>
      <button><Link className='link' to='/judgeview'>CLICK WHEN YOU ARE READY! -judgeview-</Link></button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Lobby);
