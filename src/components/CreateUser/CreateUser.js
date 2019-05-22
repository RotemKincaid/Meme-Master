import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CreateUser.scss";

class CreateUser extends Component {
  render() {
    return (
      <div className="createuser">
        This is CreateUser Component!
        <h2>USERNAME:</h2>
        <input />
        {/* <input
          // value={this.state.playerName}
          type="text"
          placeholder="nickname"
          onChange={this.nameHandler}
        />
        <button
          onClick={() => {
            socket.emit("name", {
              playerName,
              players: players.push(playerName)
            });
          }}
        >
          Send Name
        </button> */}{" "}
        <h2>SELECT AVATAR:</h2>
        <button>
          <Link className="link" to="/lobby">
            NEXT
          </Link>
        </button>
      </div>
    );
  }
}

export default CreateUser;
