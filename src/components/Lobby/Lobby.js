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

  startGame =() =>{
    console.log('startGame hit!')
    const { gamePin } = this.props.gamePin;
    console.log('gamepin at start game', gamePin)

    socket.emit("prepare game", { gamePin });
    
  }

  render() {
    const { gameObject } = this.props.gameObject;
    console.log("gameObject from redux", this.props.gameObject);

    const { players } = gameObject;
    console.log(players);

    const mappedPlayers = players.map(player => {
      return (
        <div style={{ display: "flex" }}>
          <h6>{player.username}</h6>
          <img height={"50px"} width={"auto"} src={player.avatar} />
        </div>
      );
    });
    return (
      <div className="lobby">
        This is Lobby Component!
        <h1>PLAYERS</h1>
        <div>'this will display the players list as they join'</div>
        <h2>{mappedPlayers}</h2>
        <button>
          <Link className="link" to="/playerview">
            CLICK WHEN YOU ARE READY! -playerview-
          </Link>
        </button>
        <button onClick={this.startGame}>START GAME</button>
        <button>
          <Link className="link" to="/judgeview">
            CLICK WHEN YOU ARE READY! -judgeview-
          </Link>
        </button>
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
