import React, { Component } from "react";
import Scores from "../Scores/Scores";
import "./WinnerPage.scss";

import { Link } from "react-router-dom";
import horizontalLogo from "./nelogo2.png";

import applause from "./applause3.mp3";
import tada from "./tada.mp3";
import Card from "../CardPlayerView/CardPlayerView";

import { connect } from "react-redux";
import { setGameObject, setSocket, pauseSong } from "../../dux/reducer";

class WinnerPage extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
      socket: "",
      game: {},
      winnerCard: [],
      scores: [],
      redirect: false,
      play: false,
      pause: true
    };
    this.applause1 = new Audio(applause);
    this.tada1 = new Audio(tada);
  }

  play = () => {
    this.setState({
      play: true,
      pause: false
    });
    this.applause1.play();
    this.tada1.play();
  };

  pause = () => {
    this.setState({
      play: false,
      pause: true
    });
  };

  componentDidMount() {
    this.setState({
      socket: this.props.socket
    });

    console.log(
      "socket at component did mount winner page",
      this.props.socket.socket
    );

    this.joinRoom(this.props.socket);

    this.play();
  }

  joinRoom = socket => {
    // const {socket} = this.state
    console.log("SOCKET AT JOIN ROOM on player view", socket);
    // const {socket} = this.props.socket.socket
    const { gamePin } = this.props;

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
    // this.props.history.push('/playerview')
    console.log("changeTurn hit!");
    const { socket } = this.state;

    const { gamePin } = this.props;
    console.log("gamepin at change turn game", gamePin);
    socket.emit("change turn", { gamePin });
    socket.on("get changed turn", game => {
      console.log("game sent from server after turned has changed", game);
      console.log("changed turned game", game);
      this.setState({
        game: game,
        redirect: true
      });
      this.props.setGameObject(game);
    });
    // this.redirect(socket)
  };

  // redirect = (socket) => {
  //   socket.on('redirect', url => {
  //     this.props.history.push(url)
  //   })
  // }

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
    console.log("props at winner page", this.props.gameObject);

    const { gameObject } = this.props;

    // gameObject

    console.log(gameObject.current_image);
    return (
      <div className="winnerpage-main">
        <marquee>
          <img className="horizontal-logo" src={horizontalLogo} alt="logo" />
        </marquee>
        {this.state.isOpen ? (
          <div onClick={this.closeScores} className="backdrop" />
        ) : null}
        <button className="open-scores-btn" onClick={this.openScores}>
          View Scores
        </button>

        <div className="winnerpage-inner">
          {/* <div>WINNER WINNER CHICKEN DINNER</div> */}
          {gameObject.winnerCard.length ? (
            <div>
              {/* <marquee scrollamount="20"> */}
              <h1 className="blinking">
                {gameObject.winnerCard[0].playerUsername} is the WINNER!
              </h1>
              {/* </marquee> */}
              <img
                className="meme-image-winnerpage"
                alt="winner"
                src={gameObject.current_image[0].media_url}
              />
              <div className="winner-card">
                {gameObject.winnerCard[0].content}
              </div>
            </div>
          ) : (
            <div />
          )}

          <Scores
            scores={gameObject.scores}
            className="scores-modal"
            openScores={this.state.isOpen}
            close={this.closeScores}
          >
            {" "}
          </Scores>

          <button className="another-round" onClick={this.changeTurn}>
            READY FOR ANOTHER ROUND?
          </button>

          {!gameObject.winnerCard.length
            ? this.props.history.push("/playerview")
            : null}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
  // return {
  //   gamePin: state.gamePin,
  //   gameObject: state.gameObject,
  //   socket: state.socket,
  //   username: state.username
  // };
}

const mapDispatchToProps = {
  setGameObject: setGameObject,
  setSocket: setSocket,
  pauseSong: pauseSong
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WinnerPage);
