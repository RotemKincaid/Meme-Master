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

<<<<<<< HEAD
    socket.on("welcome to", players => {
      console.log(players, "are in the room!");
=======
    socket.on("get prepared game", game => {
      console.log("game sent from server after being prepared", game);
      console.log('prepared game', game)
      
>>>>>>> 9f901f105d3c700be05d037dc30b41907098c4b5
      this.setState({
        game: game
      });

      this.props.setGameObject(game);
    });

    socket.on("send new game", newGame => {
      console.log(newGame);
      this.setState({
        game: newGame
      });
    });
  }
<<<<<<< HEAD

  // componentDidMount() {
  //   this.setState({
  //     game: this.props.gameObject.gameObject
  //   });
  // }

  render() {
    // const { gameObject } = this.props.gameObject;
    console.log("gameObject from redux", this.props.gameObject);

    const { players } = this.state;
=======
  componentDidMount(){
    this.setState({
      game: this.props.gameObject.gameObject
    })
  }

  render() {
    const { gameObject } = this.props.gameObject;
    console.log("gameObject from redux", this.props.gameObject);

    const { players } = gameObject;
>>>>>>> 9f901f105d3c700be05d037dc30b41907098c4b5
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
