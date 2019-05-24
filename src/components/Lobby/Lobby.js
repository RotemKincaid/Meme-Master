import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Lobby.scss";

import { connect } from "react-redux";
import { setGameObject } from "../../dux/reducer";
import io from "socket.io-client";
const socket = io("http://localhost:4052");

class Lobby extends Component {
  constructor(){
    super()

    this.state ={
      game: {}
    }

    socket.on("get prepared game", game => {
      console.log("game sent from server after being prepared", game);
      console.log('prepared game', game)
      
      this.setState({
        game: game
      });

      this.props.setGameObject(game);
    });
  }
  componentDidMount(){
    this.setState({
      game: this.props.gameObject.gameObject
    })
  }

  prepareGame = () => {
    const {gamePin} = this.props.gamePin
    console.log('gamepin at prepare game', gamePin)
    socket.emit('prepare game', {gamePin})

    
  }

  
  render() {
    console.log('state game on lobby', this.state.game)

    const {gameObject} = this.props.gameObject
    console.log('gameObject from redux', gameObject)

    const {players} = gameObject
    console.log(players)

    
      const mappedPlayers = players.map(player => {
        return <div style={{display: 'flex'}}>
          <h1>{player.username}</h1>
          <img height={'50px'} width={'auto'} src={player.avatar}/>
          </div>
      })
      


    

    return (
    <div className='lobby'>This is Lobby Component!
      <h1>PLAYERS</h1>
      
        <div>
        'this will display the players list as they join'
          {mappedPlayers}

        </div>
      
        
      
      <button onClick={this.prepareGame}>CLICK WHEN YOU ARE READY! -playerview-</button>
      <button><Link className='link' to='/judgeview'>CLICK WHEN YOU ARE READY! -judgeview-</Link></button>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gamePin: state.gamePin,
    gameObject: state.gameObject
  };
}

const mapDispatchToProps = {
  setGameObject: setGameObject
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lobby);
