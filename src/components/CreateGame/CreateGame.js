import React, { Component } from "react";
import "./CreateGame.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setGamePin, setGameObject } from "../../dux/reducer";
import logo from "../../components/logo.png";

// import io from "socket.io-client";
// const socket = io.connect("http://localhost:4052");
// console.log(socket)

class CreateGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gamePin: 0,
      game: {},
      socket: ""
    };
  }

  componentDidMount() {
    const { gamePin } = this.state;
    this.generateRandom();
    this.setState({
      // game: gameObject,

      socket: this.props.socket
    });
    // console.log('socket at component did mount',socket)
    // this.props.setSocket(socket)

    this.props.setGamePin(gamePin);
  }

  generateRandom() {
    this.setState({
      gamePin: Math.floor(100000 + Math.random() * 900000)
    });
  }

  sendGame = () => {
    const { gamePin, socket } = this.state;

    socket.emit("create game", { gamePin });
    this.props.setGamePin(this.state.gamePin);

    socket.on("send new game", newGame => {
      console.log("game sent from server:", newGame);
      this.setState({
        game: newGame
      });
      this.props.setGameObject(newGame);
    });
  };

  render() {
    const { gamePin } = this.state;
    console.log(this.props.gamePin);
    console.log(gamePin);
    console.log(this.props.socket);

    return (
      <div className="creategame">
        <div className="create-game-inner">
          <img src={logo} />
          <br />
          <h3>Here is your game pin:</h3> <h1>{gamePin}</h1>
                            
          <h3>Share Game PIN with other players so they can join the game!</h3>
                         
          <Link to="/createuser">
            <button className="next-btn" onClick={this.sendGame}>
              NEXT
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gamePin: state.gamePin,
    gameObject: state.gameObject,
    socket: state.socket,
    creator: state.creator
  };
}

const mapDispatchToProps = {
  setGamePin: setGamePin,
  setGameObject: setGameObject
  // ,
  // setSocket: setSocket
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateGame);
