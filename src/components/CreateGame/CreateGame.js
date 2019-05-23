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
      gamePin: 0,
      game: {}
    };

    socket.on("send new game", newGame => {
      console.log("game sent from server:", newGame);
      this.setState({
        game: newGame
      });
      this.props.setGameObject(newGame);
    });
  }

  componentDidMount() {
    const { gamePin } = this.state;
    this.generateRandom();
    // this.props.setGamePin(gameNumber.gamePin);
  }
  generateRandom() {
    this.setState({
      gamePin: Math.floor(100000 + Math.random() * 900000)
    });
  }

  sendGame() {
    const { gamePin } = this.state;

    socket.emit("create game", { gamePin });
    this.props.setGamePin(this.state.gamePin);
  }

  render() {
    const { gamePin } = this.state;
    console.log(this.props.gamePin);
    console.log(gamePin);
    return (
      <div className="creategame">
        <div>
          <h3>This is your game pin </h3> <h3>{gamePin}</h3>
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
