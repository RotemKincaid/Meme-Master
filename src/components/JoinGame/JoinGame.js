import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-router-dom";

import "./JoinGame.scss";
import io from "socket.io-client";
const socket = io("http://localhost:4052");

class JoinGame extends Component {
  constructor() {
    super();

    this.state = {
      // gamePin: null,
      joined: false,
      message: "",
      playerName: "",
      players: []
    };

    socket.on("news", data => {
      console.log(data);
      this.setState({
        message: data
      });
    });

    socket.on("welcome", data => {
      console.log(data);
      this.setState({
        playerName: data
      });
    });

    // socket.on("welcome to", players => {
    //   console.log("Welcome to the room", players);
    //   this.setState({
    //     players
    //   });
    // });
  }

  nameHandler = e => {
    this.setState({
      playerName: e.target.value
    });
  };

  render() {
    const { message, joined, playerName, players } = this.state;
    // console.log(playerName);
    console.log(this.state.players);

    const mappedNames = players.map(name => {
      return <div key={name.id}>{name} Joined</div>;
    });
    return (
      <div className="join-game">
        This is JoinGame
        <h1>This is going to be the logo!</h1>
        {/* <h3>{mappedNames}</h3> */}
        {/* <h2>My message: {message}</h2> */}
        <h3>Enter Game PIN:</h3>
        <input />
        <button>
          <Link className="link" to="/createuser">
            NEXT
          </Link>
        </button>
        <button
          // onClick={() =>
          //   socket.emit("Join Room", {
          //     username: playerName,
          //     gamePin: 12345
          //   })
          // }
        >
          Join Room
        </button>
        {/* <input
          // value={this.state.playerName}
          type="text"
          placeholder="nickname"
          onChange={this.nameHandler}
        /> */}
        <button
          onClick={() => {
            socket.emit("name", {
              playerName,
              players: players.push(playerName)
            });
          }}
        >
          Send Name
        </button>
        <h2>
          Joined Room:<div>{mappedNames}</div>
        </h2> */}
      </div>
    );
  }
}

export default JoinGame;
