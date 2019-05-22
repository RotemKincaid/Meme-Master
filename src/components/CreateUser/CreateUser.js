import React, { Component } from "react";
import "./CreateUser.scss";
import { Link } from "react-router-dom";
import io from "socket.io-client";
const socket = io("http://localhost:4052");

class CreateUser extends Component {
  constructor() {
    super();

    this.state = {
      players: [],
      username: "",
      avatar: ""
    };

    socket.on("welcome to", players => {
      console.log("Welcome to the room", players);
      this.setState({
        players
      });
    });
  }


  nameHandler = e => {
    this.setState({
      playerName: e.target.value
    });
  };

  render() {

    const {username} = this.state
    return (
      <div className="createuser">
        This is CreateUser Component!
        <h2>USERNAME:</h2>
        <input
          // value={this.state.playerName}
          type="text"
          placeholder="nickname"
          onChange={this.nameHandler}
        />
        <h2>SELECT AVATAR:</h2>
        <button
          onClick={() =>
            socket.emit("Join Room", {
              username:username,
              gamePin: 12345
            })
          }
        >
          <Link className="link" to="/lobby">
            NEXT
          </Link>
        </button>
      </div>
    );
  }
}

export default CreateUser;
