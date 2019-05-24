import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Lobby.scss";

import { connect } from "react-redux";
import { setGameObject } from "../../dux/reducer";
import io from "socket.io-client";
const socket = io("http://localhost:4052");

class Lobby extends Component {
  constructor() {
    super();

    this.state = {
      game: {},
      players: []
    };

    socket.on("welcome to", players => {
      console.log(players, "are in the room!");
      this.setState({
        players
      });
    });

    socket.on("send new game", newGame => {
      console.log(newGame);
      this.setState({
        game: newGame
      });
    });
  }

  // componentDidMount() {
  //   this.setState({
  //     game: this.props.gameObject.gameObject
  //   });
  // }

  render() {
    // const { gameObject } = this.props.gameObject;
    console.log("gameObject from redux", this.props.gameObject);

    const { players } = this.state;
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
