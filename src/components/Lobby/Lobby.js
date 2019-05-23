import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Lobby.scss";

import { connect } from "react-redux";
import { setGameObject } from "../../dux/reducer";
import io from "socket.io-client";
const socket = io("http://localhost:4052");

class Lobby extends Component {
<<<<<<< HEAD
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
      
        
      
      <button><Link className='link' to='/playerview'>CLICK WHEN YOU ARE READY! -playerview-</Link></button>
      <button><Link className='link' to='/judgeview'>CLICK WHEN YOU ARE READY! -judgeview-</Link></button>
    </div>
=======
  constructor() {
    super();

    this.state = {
      game: {},
      players: []
    };

    socket.on("message", players => {
      console.log(players, "are in the room!");
      this.setState({
        players
      });
    });
  }

  componentDidMount() {}

  render() {
    const { gameObject } = this.props.gameObject;
    console.log("gameObject from redux", gameObject);
    const { players } = gameObject;
    console.log(players);

    const mappedPlayers = players.map(player => {
      return (
        <div style={{ display: "flex" }}>
          <h1>{player.username}</h1>
          <img height={"50px"} width={"auto"} src={player.avatar} />
        </div>
      );
    });
    return (
      <div className="lobby">
        This is Lobby Component!
        <h1>PLAYERS</h1>
        <div>'this will display the players list as they join'</div>
        <button>
          <Link className="link" to="/playerview">
            CLICK WHEN YOU ARE READY! -playerview-
          </Link>
        </button>
        <button>
          <Link className="link" to="/judgeview">
            CLICK WHEN YOU ARE READY! -judgeview-
          </Link>
        </button>
      </div>
>>>>>>> 9214952fc2a12592616c65680edc764504566f2b
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
