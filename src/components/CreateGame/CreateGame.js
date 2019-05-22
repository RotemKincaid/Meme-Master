import React, { Component } from "react";
// set-up a connection between the client and the server
import io from "socket.io-client";
var socket = io.connect();
// let's assume that the client page, once rendered, knows what room it wants to join
class CreateGame extends Component {
  constructor() {
    super();

    this.state = {
      gameNumber: null
    };

    // Connected, let's sign-up for to receive messages for this room

    socket.on("message", function(data) {
      console.log("Incoming message:", data);
    });
  }

  generateRandom() {
    this.setState({
      gameNumber: Math.floor(100000 + Math.random() * 900000)
    });
  }

  render() {
    const { gameNumber } = this.state;
    return (
      <div>
        Create Game Pin For New Game?
        <button onClick={() => this.generateRandom()}>get pin</button>
        <h3>{gameNumber}</h3>
        <h3>Use this game number?</h3>
        <button onClick={() => socket.emit("room", { gameNumber })}>Yes</button>
        <button>No</button>
        <h5>Share Game PIN with other players</h5>
        <h3> Or join </h3>
      </div>
    );
  }
}
export default CreateGame;
