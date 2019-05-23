import React, { Component } from "react";
import {Link} from 'react-router-dom'
import './Lobby.scss'

import {connect} from "react-redux";
import {setGameObject} from '../../dux/reducer'

class Lobby extends Component {
  constructor(){
    super()

    this.state ={
      game: {}
    }
  }
  componentDidMount(){
    this.setState({
      game: this.props.gameObject.gameObject
    })
  }

  
  render() {
    console.log('state game on lobby', this.state.game)

    const {gameObject} = this.props.gameObject
    console.log('gameObject from redux', gameObject)

    const {players} = gameObject
    console.log(players)

    const mappedPlayers = players.map(player => {
      return <div>
        <h1>{player.username}</h1>
        <img src={player.avatar_url}/>
        </div>
    })

    

    return (
    <div className='lobby'>This is Lobby Component!
      <h1>PLAYERS</h1>
      <div>
        'this will display the players list as they join'
        {mappedPlayers}

      </div>
      <button><Link className='link' to='/playerview'>CLICK WHEN YOU ARE READY! -playerview-</Link></button>
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
