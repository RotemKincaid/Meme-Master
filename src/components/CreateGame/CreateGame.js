import React, { Component } from "react";
import "./CreateGame.scss";
import { Link } from "react-router-dom";
import io from "socket.io-client";
import { connect } from "react-redux";
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
           Create Game Pin For New Game?         
          <button onClick={() => this.generateRandom()}>get pin</button>
                  <h3>{gameNumber}</h3>
                  <h3>Use this game number?</h3>
                  
          <button onClick={() => socket.emit("room", { gameNumber })}>
            Yes
          </button>
                  <button>No</button>
                  <h5>Share Game PIN with other players</h5>
                  <h3> Or join </h3>
                
        </div>
        {/* This is CreateGame Component!
        <h1>This is your pin: </h1>
        <h2>'pin will go here'</h2> */}
        <button>
          <Link className="link" to="/createuser">
            NEXT
          </Link>
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateGame);
