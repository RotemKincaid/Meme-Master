import React, { Component } from "react";
import "./CreateGame.scss";
import { Link } from "react-router-dom";
import io from "socket.io-client";
import { connect } from "react-redux";
import { setGamePin, setGameObject } from "../../dux/reducer";

var socket = io.connect();

class CreateGame extends Component {
  constructor() {
    super();

    this.state = {
      gameNumber: 0
    };

    socket.on("message", function(data) {
      console.log("Incoming message:", data);
    });
  }

  componentDidMount() {
    const { gameNumber } = this.state;
    this.generateRandom();
    // this.props.setGamePin(gameNumber.gamePin);
  }
  generateRandom() {
    this.setState({
      gameNumber: Math.floor(100000 + Math.random() * 900000)
    });
  }

  sendGame() {
    const { gameNumber } = this.state;

    socket.emit("room", { gameNumber });
    this.props.setGamePin(this.state.gameNumber);
  }

  render() {
    const { gameNumber } = this.state;
    console.log(this.props.gamePin);
    console.log(gameNumber);
    return (
      <div className="creategame">
        <div>
          <h3>This is your game pin </h3> <h3>{gameNumber}</h3>
                           <h3>Share Game PIN with other players</h3>
                         
        </div>

        <Link className="link" to="/createuser">
          <button onClick={() => this.sendGame()}>Next</button>
        </Link>
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
)(CreateGame);
