import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Lobby.scss";

import { connect } from "react-redux";
import { setGameObject } from "../../dux/reducer";

import io from "socket.io-client";
// const socket = io("http://localhost:4052");

class Lobby extends Component {
  constructor() {
    super();

    this.state = {
      game: {},
      socket: "",
      
    };
  }
  componentDidMount() {
    this.setState({
      game: this.props.gameObject.gameObject,
      socket: this.props.socket.socket
    });
    // this.joinRoomOnly(this.props.socket.socket)
  }

  joinRoomOnly = (socket) => {
    console.log("HIT JOIN ROOM at lobby");
    const { username, gamePin, avatar } = this.state;
    // const {gamePin} = this.props.gamePin
    socket.emit("join room only", {
      gamePin: gamePin
    });
    socket.on("send game", game => {
      console.log("game sent from server after join room only", game);
      this.setState({
        game: game
      });
      this.props.setGameObject(game);
    });
  }

  startGame = () => {
    console.log("startGame hit!");
    // const { socket } = this.state;
    const {socket} = this.props.socket
    console.log(socket)
    const { gamePin } = this.props.gamePin;
    console.log("gamepin at start game", gamePin);

    socket.emit("prepare game", { gamePin });

    socket.on("get prepared game", game => {
      console.log("game sent from server after being prepared", game);
      console.log("prepared game", game);

      this.setState({
        game: game,
        gameReady: true,
      });

      this.props.setGameObject(game);
    });
    
  };
  changeTurn = () => {
    console.log("changeTurn hit!");
    const { socket } = this.state;
    const { gamePin } = this.props.gamePin;
    console.log("gamepin at change turn game", gamePin);

    socket.emit("change turn", { gamePin });

    socket.on("get changed turn", game => {
      console.log("game sent from server after turned has changed", game);
      console.log("changed turned game", game);

      this.setState({
        game: game
      });

      this.props.setGameObject(game);
    });
  };

  render() {
    const { gameObject } = this.props.gameObject;
    console.log("gameObject from redux", this.props.gameObject);

    const { players } = gameObject;
    console.log('players at lobby', players);

    const mappedPlayers = players.map((player, index) => {
      return (
        <div key={index} style={{ display: "flex" }}>
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
                PLAYER VIEW
            </Link>
          </button>
          <button onClick={this.startGame}>START GAME</button>
          THIS WILL GO ON PLAYERS VIEW BUT WORKING ON HERE FOR NOW
          <button onClick={this.changeTurn}>CHANGE TURN</button>
          {/* <button>
            <Link className="link" to="/judgeview">
              CLICK WHEN YOU ARE READY! -judgeview-
            </Link>
          </button> */}
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gamePin: state.gamePin,
    gameObject: state.gameObject,
    socket: state.socket
  };
}

const mapDispatchToProps = {
  setGameObject: setGameObject
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lobby);
