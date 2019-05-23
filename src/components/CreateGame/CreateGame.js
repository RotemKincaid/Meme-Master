import React, { Component } from "react";
import "./CreateGame.scss";
import { Link } from "react-router-dom";
import io from "socket.io-client";
import {connect} from "react-redux";
import {setGamePin, setGameObject} from '../../dux/reducer'


const socket = io("http://localhost:4052");


class CreateGame extends Component {
  constructor() {
    super();
    this.state = {
      gameNumber: 0,
      game: []
    };
    socket.on("message", function(data) {
      console.log("Incoming message:", data);
    });

    socket.on("Send New Game", game => {
      console.log("game sent from the back", game);
      this.setState({
        game: game
      });
      this.props.setGameObject(game)
    });
  }
  componentDidMount() {
    this.generateRandom();
  }
  generateRandom() {
    this.setState({
      gameNumber: Math.floor(100000 + Math.random() * 900000)
    });
    const gameNumber = this.state
    this.props.setGamePin(gameNumber)
  }
  render() {
    console.log(this.props.gameObject)
    const { gameNumber } = this.state;
    console.log(this.props.gamePin)
    console.log(gameNumber);
    return (
      <div className="creategame">
        <div>
        <h3>This is your game pin </h3>
        <h3>{gameNumber}</h3>
        <h3>Share Game PIN with other players</h3>
                         
        </div>
        <Link className="link" to="/createuser">
          <button onClick={() => socket.emit("room", { gameNumber })}>
            Next
          </button>

        {/* created this to test if game was getting media and cards */}
          <button onClick={() => socket.emit("Create Game", { gameNumber })}>
            Create Game
          </button>


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
