import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./Lobby.scss";
import { connect } from "react-redux";
import { setGameObject } from "../../dux/reducer";
// import io from "socket.io-client";
// const socket = io("http://localhost:4052");
class Lobby extends Component {
  constructor() {
    super();
    this.state = {
      game: {},
      socket: ""
    };
  }
  componentDidMount() {
    this.setState({
      game: this.props.gameObject.gameObject,
      socket: this.props.socket.socket
    });
    this.joinRoom(this.props.socket.socket);
    // this.joinRoomOnly(this.props.socket.socket)
  }
  joinRoom = socket => {
    // const {socket} = this.state
    console.log("SOCKET AT JOIN ROOM on lobby", socket);
    // const {socket} = this.props.socket.socket
    const { gamePin } = this.props.gamePin;
    socket.emit("join room at player view", { gamePin });
    socket.on("get game after join room", game => {
      console.log("game sent from server", game);
      this.setState({
        game: game
      });
      this.props.setGameObject(game);
      // this.getChosenCards(gamePin);
    });
  };
  // joinRoomOnly = (socket) => {
  //   console.log("HIT JOIN ROOM at lobby");
  //   const { username, gamePin, avatar } = this.state;
  //   // const {gamePin} = this.props.gamePin
  //   socket.emit("join room only", {
  //     gamePin: gamePin
  //   });
  //   socket.on("send game", game => {
  //     console.log("game sent from server after join room only", game);
  //     this.setState({
  //       game: game
  //     });
  //     this.props.setGameObject(game);
  //   });
  // }
  startGame = () => {
    console.log("startGame hit!");
    // const { socket } = this.state;
    const { socket } = this.props.socket;
    console.log(socket);
    const { gamePin } = this.props.gamePin;
    console.log("gamepin at start game", gamePin);
    socket.emit("prepare game", { gamePin });
    socket.on("get prepared game", game => {
      console.log("game sent from server after being prepared", game);
      console.log("prepared game", game);
      this.setState({
        game: game
      });
      this.props.setGameObject(game);
    });
  };

  render() {
    const { gameObject, creator } = this.props.gameObject;
    console.log("gameObject from redux", this.props.gameObject);
    const { players, active } = gameObject;
    console.log("creator at lobby", this.props.gameObject.creator);
    console.log("players at lobby", players);

    console.log("ACTIVE AT LOBBY", active);
    console.log(players);

    return (
      <div className="lobby">
        {/* This is Lobby Component!
        <h1>PLAYERS</h1>
        <div>'this will display the players list as they join'</div> */}
        {/* <button>
          <Link className="link" to="/playerview">
            PLAYER VIEW
          </Link>
        </button> */}
        {/* <button onClick={this.startGame}>START GAME</button>
        THIS WILL GO ON PLAYERS VIEW BUT WORKING ON HERE FOR NOW
        <button onClick={this.changeTurn}>CHANGE TURN</button> */}
        {/* <button>
            <Link className="link" to="/judgeview">
              CLICK WHEN YOU ARE READY! -judgeview-
            </Link>
          </button> */}
        {/* This is Lobby Component! */}
        <div className="titles">
          <h1>GAME LOBBY</h1>
          <h4 style={{ fontSize: "35px", color: "red" }}>
            {this.props.gamePin.gamePin}
          </h4>
        </div>

        <div className="lobby-inner">
          {players ? (
            <h2>
              {players.map((player, index) => {
                return (
                  <div className="mapped-players" key={index}>
                    <h6>{player.username}</h6>
                    <img
                      alt="lobby-avatar"
                      className="lobby-avatar"
                      src={player.avatar}
                    />
                  </div>
                );
              })}
            </h2>
          ) : (
            <h2>loading..</h2>
          )}
        </div>

        {creator ? (
          <div>
            <h5>Is everyone ready to play?</h5>
            <br />
            {/* <Link to="/playerview">
              <button className="start-game" onClick={this.startGame}>
                START GAME
              </button>
            </Link> */}
            <button className="start-game" onClick={this.startGame}>
              START GAME
            </button>
          </div>
        ) : (
          // <Link to="/playerview"><button className="start-game">JOIN GAME</button></Link>
          <h5>Creator will start the game!</h5>
        )}

        {active ? this.props.history.push("/playerview") : null}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    gamePin: state.gamePin,
    gameObject: state.gameObject,
    socket: state.socket,
    creator: state.creator
  };
}
const mapDispatchToProps = {
  setGameObject: setGameObject
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lobby);
