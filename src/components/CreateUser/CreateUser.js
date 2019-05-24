import React, { Component } from "react";
import "./CreateUser.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setGamePin, setGameObject } from "../../dux/reducer";

import io from "socket.io-client";
const socket = io.connect("http://localhost:4052");

class CreateUser extends Component {
  constructor() {
    super();

    this.state = {
      players: [],
      username: "",
      avatar: "",
      gamePin: null,
      game: {}
    };

    socket.on("send game after player joined", game => {
      this.setState({
        game: game
      });

      this.props.setGameObject(game);
    });

    socket.on("welcome to", data => {
      console.log("Welcome, ", data);
      const { gamePin } = this.props.gamePin;
      this.setState({
        username: data,
        players: data,
        gamePin
      });
    });
  }

  nameHandler = e => {
    this.setState({
      username: e.target.value
    });
  };

  handlePin = e => {
    this.setState({
      gamePin: e.target.value
    });
  };

  pinMatch = () => {
    if (this.state.gamePin === this.props.gamePin.gamePin) {
      console.log("GAME PIN MATCHES");
    } else {
      console.log("SOMETHING IS WRONG");
    }
  };

  render() {
    console.log(this.props.gameObject);
    const { gamePin } = this.props.gamePin;
    const { username, players } = this.state;
    const mappedNames = players.map(name => {
      return <div key={name.id}>{name} Joined</div>;
    });

    return (
      <div className="createuser">
        This is the Create User Component!
        <h2>game pin{this.props.gamePin.gamePin}</h2>
        {this.props.gamePin.gamePin ? (
          <div />
        ) : (
          <input
            value={this.state.gamePin}
            placeholder="game pin"
            onChange={this.handlePin}
          />
        )}
        <h2>Enter Username</h2>
        <input
          // value={this.state.username}
          type="text"
          placeholder="nickname"
          onChange={this.nameHandler}
        />
        {/* <button
          onClick={() => {
            socket.emit("name", {
              username: username,
              players: players.push(username),
              gamePin: this.state.gamePin
            });
          }}
        >
          Send Name
        </button> */}
        <h2>Select Avatar:</h2>
        <select>
          <option />
          <option value="avatar url two">2</option>
          <option value="avatar url three">3</option>
        </select>
        <br />
        <button
          onClick={() =>
            socket.emit("Join Room", {
              username: username,
              players: players.push(username),
              gamePin: this.state.gamePin
                ? this.state.gamePin
                : this.props.gamePin.gamePin
            })
          }
        >
          Join Room- click here first!
        </button>
        <button
        // onClick={() =>
        //   socket.emit("Join Room", {
        //     username: username,
        //     gamePin: 12345
        //   })
        // }
        >
          <Link className="link" to="/lobby">
            NEXT
          </Link>
        </button>
        <h2>
          Joined Room:<div>{mappedNames}</div>
        </h2>
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
  setGamePin: setGamePin,
  setGameObject: setGameObject
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateUser);
