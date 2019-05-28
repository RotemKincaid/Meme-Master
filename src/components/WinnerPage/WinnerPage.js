import React, { Component } from "react";
import Scores from "../Scores/Scores";
import "./WinnerPage.scss";

import { connect } from "react-redux";
import { setGameObject, setSocket } from "../../dux/reducer";

class WinnerPage extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
      socket: "",
      game: {},
      winnerCard: [],
      scores: []
    };
  }

  componentDidMount(){
    this.setState({
      socket: this.props.socket.socket
    });

    console.log(
      "socket at component did mount winner page",
      this.props.socket.socket
    );

    this.joinRoom(this.props.socket.socket);
  }

  joinRoom = socket => {
    // const {socket} = this.state
    console.log("SOCKET AT JOIN ROOM on player view", socket);
    // const {socket} = this.props.socket.socket
    const { gamePin } = this.props.gamePin;

    socket.emit("join room at player view", { gamePin });

    socket.on("get game after join room", game => {
      console.log("game sent from server", game);
      this.setState({
        game: game,
        winnerCard: game.winnerCard,
        scores: game.scores
      });
      this.props.setGameObject(game);
      
      
    });

  };

  changeTurn = () => {
    console.log("changeTurn hit!");
    const { socket } = this.state;
    const { gamePin } = this.props.gamePin;
    console.log("gamepin at change turn game", gamePin);
    socket.emit("change turn", { gamePin });
    socket.on("get changed turn", game => {
      console.log("game sent from server after turned has changed", game);
      console.log("changed turned game", game);
      this.setState({
        game: game
      });
      this.props.setGameObject(game);
    });
  };

  openScores = () => {
    this.setState({
      isOpen: true
    });
  };

  closeScores = () => {
    this.setState({
      isOpen: false
    });
  };

  render() {

    console.log('props at winner page',this.props)

    const {gameObject} = this.props.gameObject

    // gameObject

    console.log(gameObject.current_image)
    return (
      <div className="winnerpage-main">
        <button onClick={this.changeTurn}>CHANGE TURN</button> 
        {this.state.isOpen ? (
          <div onClick={this.closeScores} className="backdrop" />
        ) : null}

        <Scores
          scores={gameObject.scores}
          className="scores-modal"
          openScores={this.state.isOpen}
          close={this.closeScores}
        >
          {" "}
        </Scores>
        <div>WINNER WINNER CHICKEN DINNER</div>
        <img alt = 'winner' src={gameObject.current_image[0].media_url}/>
        <button className="open-scores-btn" onClick={this.openScores}>
          View Scores
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gamePin: state.gamePin,
    gameObject: state.gameObject,
    socket: state.socket,
    username: state.username
  };
}

const mapDispatchToProps = {
  setGameObject: setGameObject,
  setSocket: setSocket
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WinnerPage);


