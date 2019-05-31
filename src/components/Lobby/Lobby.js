import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./Lobby.scss";
import { connect } from "react-redux";
import {
  setGameObject,
  setSocket,
  pauseSong,
  setSong,
  playSong
} from "../../dux/reducer";
import sillySong from "./star-wars-cantina-song.mp3";
// import io from "socket.io-client";
// const socket = io("http://localhost:4052");
class Lobby extends Component {
  constructor() {
    super();
    this.state = {
      game: {},
      socket: "",
      play: true,
      pause: false
    };
    this.audio = new Audio(sillySong);
  }
  componentDidMount() {
    if (this.props.socket) {
      this.setState({
        game: this.props.gameObject,
        socket: this.props.socket
      });
      this.joinRoom(this.props.socket);
      // this.joinRoomOnly(this.props.socket.socket)
    } else {
      this.props.history.push("/");
      // const socket = io("http://localhost:4052");
      // this.setState({
      //   // game: gameObject,
      //   // gamePin: gamePin,
      //   socket: socket
      // });
      // this.props.setSocket(socket)
      // this.joinRoom(socket);
    }
    // this.pauseSong();
  }

  pause = () => {
    this.setState({
      play: false,
      pause: true
    });
    this.props.song.pause();
  };

  playNew = () => {
    this.setState({
      play: true,
      pause: false
    });
    this.audio.play();
  };

  joinRoom = socket => {
    // const {socket} = this.state
    console.log("SOCKET AT JOIN ROOM on lobby", socket);
    // const {socket} = this.props.socket.socket
    const { gamePin } = this.props;
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

  startGame = () => {
    console.log("startGame hit!");
    // const { socket } = this.state;
    const { socket, song2 } = this.props;

    console.log(socket);
    const { gamePin } = this.props;
    console.log("gamepin at start game", gamePin);
    socket.emit("prepare game", { gamePin });
    socket.on("get prepared game", game => {
      console.log("game sent from server after being prepared", game);
      console.log("prepared game", game);
      this.setState({
        game: game
      });
      this.props.setGameObject(game);

      this.pause();
      this.playNew(song2);

      // this.props.song.pause();
    });
  };

  render() {
    const { gameObject, creator } = this.props;

    console.log("gameObject from redux", this.props);
    const { players, active } = gameObject;
    console.log("creator at lobby", this.props.gameObject.creator);
    console.log("players at lobby", players);

    console.log("ACTIVE AT LOBBY", active);
    console.log(players);

    return (
      <div className="lobby">
        <div className="titles">
          <h1>GAME LOBBY</h1>
          <h4 style={{ fontSize: "35px", color: "red" }}>
            {this.props.gamePin}
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

            <button className="start-game" onClick={this.startGame}>
              START GAME
            </button>
          </div>
        ) : (
          <h5>Creator will start the game!</h5>
        )}

        {active ? this.props.history.push("/playerview") : null}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
  // return {
  //   gamePin: state.gamePin,
  //   gameObject: state.gameObject,
  //   socket: state.socket,
  //   creator: state.creator
  // };
}
const mapDispatchToProps = {
  setGameObject: setGameObject,
  setSocket: setSocket,
  pauseSong: pauseSong,
  setSong: setSong,
  playSong: playSong
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lobby);
