import React, { Component } from "react";
import "./CreateGame.scss";
import { Link } from "react-router-dom";
import io from "socket.io-client";
var socket = io.connect();

class CreateGame extends Component {
  constructor() {
    super();

    this.state = {
      gameNumber: null
    };

    socket.on("message", function(data) {
      console.log("Incoming message:", data);
    });
  }

  componentDidMount() {
    this.generateRandom();
  }
  generateRandom() {
    this.setState({
      gameNumber: Math.floor(100000 + Math.random() * 900000)
    });
  }

  render() {
    const { gameNumber } = this.state;
    return (
      <div className="creategame">
        <div>
           Here Is Your Game PIN         
          {/* <button onClick={() => this.generateRandom()}>get pin</button> */}
                  <h3>{gameNumber}</h3>
                                           
        </div>
        <h4>Give Your PIN To All Other Players</h4>
        <Link className="link" to="/createuser">
          <button onClick={() => socket.emit("room", { gameNumber })}>
            Next
          </button>
        </Link>
      </div>
    );
  }
}

export default CreateGame;
