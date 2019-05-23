import React, { Component } from "react";
import "./CreateUser.scss";
import { Link } from "react-router-dom";
import {connect} from "react-redux"
import {setGamePin } from "../../dux/reducer"

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

  render() {
    console.log(this.props.gamePin)
    const { username } = this.state;
    return (
      <div className="createuser">
        This is the Create User Component!

        <h2>Enter game pin</h2>

        <input 

        value={this.props.gamePin.gamePin}
        placeholder="game pin" />
        <h2>Enter Username</h2>
        <input
          value={""}
          type="text"
          placeholder="nickname"
          onChange={this.nameHandler}
        />
        <h2>Select Avatar:</h2>
        <select>
          <option></option>
          <option value="avatar url two">2</option>
          <option value="avatar url three">3</option>
        </select>
        <button
          onClick={() =>
            socket.emit("Join Room", {
              username: username,
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

function mapStateToProps(state) {
  return {
    gamePin: state.gamePin,
    // gameObject: state.gameObject
  };
}

const mapDispatchToProps = {
  setGamePin: setGamePin,
  // setGameObject: setGameObject
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateUser);
