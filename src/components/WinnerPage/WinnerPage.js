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
      winnerCard: []
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
        winnerCard: game.winnerCard
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
    return (
      <div className="winnerpage-main">
        {this.state.isOpen ? (
          <div onClick={this.closeScores} className="backdrop" />
        ) : null}

        <Scores
          className="scores-modal"
          openScores={this.state.isOpen}
          close={this.closeScores}
        >
          {" "}
        </Scores>
        <div>WINNER WINNER CHICKEN DINNER</div>
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


