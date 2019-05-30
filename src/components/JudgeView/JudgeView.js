import React, { Component } from "react";
import Card from "../Card/Card";
import CardPlayerView from "../CardPlayerView/CardPlayerView";
import "./JudgeView.scss";
import { connect } from "react-redux";
import { setGameObject, setSocket } from "../../dux/reducer";
// import { Link } from "react-router-dom";

class JudgeView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      image: "",
      socket: "",
      game: {},
      chosenCards: [],
      winnerCard: []
    };
  }

  componentDidMount() {
    this.setState({
      socket: this.props.socket
    });

    console.log("socket at component did mount player view", this.props.socket);

    this.joinRoom(this.props.socket);
  }

  joinRoom = socket => {
    // const {socket} = this.state
    console.log("SOCKET AT JOIN ROOM on judge", socket);
    // const {socket} = this.props.socket.socket
    const { gamePin } = this.props;

    socket.emit("join room at player view", { gamePin });

    socket.on("get game after join room", game => {
      console.log("game sent from server", game);
      this.setState({
        game: game,
        image: game.current_image[0].media_url,
        chosenCards: game.chosenCards
      });
      this.props.setGameObject(game);
      // this.getChosenCards(gamePin);
    });
  };

  chooseCard = card => {
    const { gamePin } = this.props;
    console.log("card at choosecard", card);
    console.log("this.props at chooseCard", this.props);
    const { socket } = this.state;
    console.log("socket at choose card", socket);

    this.setState({
      winnerCard: [card]
    });

    socket.emit("choose winner card", {
      gamePin: gamePin,
      card: card
      // username: this.props.username.username
    });

    socket.on("get update game with winner card", game => {
      console.log(
        "game sent from server after a card was chosen as winner",
        game
      );
      this.setState({
        game: game
      });
      this.props.setGameObject(game);
    });
  };

  render() {
    console.log("PROPS AT JUDGE VIEW", this.props);

    const { image, chosenCards } = this.state;

    const { gameObject, username } = this.props;

    var winnerCard = gameObject.winnerCard;

    // console.log('WINNER CARD I NEED', gameObject.gameObject.winnerCard)

    var judgeUsername = gameObject.judge[0].username;

    var judgeAvatar = gameObject.judge[0].avatar;

    var playerUsername = username;

    console.log("JUDGE USERNAME AT JUDGE VIEW", judgeUsername);

    var isPlayerJudge = false;

    if (playerUsername === judgeUsername) {
      isPlayerJudge = true;
    } else {
      isPlayerJudge = false;
    }

    console.log("IS PLAYER JUDGE AT JUDGE VIEW", isPlayerJudge);

    let mappedChosenCards = chosenCards.map(card => {
      return (
        <div key={card.card_id} className="card-container-judgeview">
          {isPlayerJudge ? (
            <Card
              card={card}
              content={card.content}
              chooseCard={this.chooseCard}
            />
          ) : (
            //non clickable card, just display
            <CardPlayerView
              card={card}
              content={card.content}
              chooseCard={this.chooseCard}
            />
          )}
        </div>
      );
    });

    return (
      <div className="judgeview-main">
        <div className="judgeview-inner">
          {isPlayerJudge ? (
            <div className="judge-avatar-name">
              <h3>
                {" "}
                <span>{judgeUsername} </span> you are the judge!{" "}
              </h3>
              <img
                alt="lobby-avatar"
                className="judge-avatar"
                src={judgeAvatar}
              />
            </div>
          ) : (
            <h3>
              <span>{judgeUsername}</span> is thinking...
            </h3>
          )}
          <img
            alt="judge"
            className="meme-image-judgeview"
            src={image}
            // src="https://imgflip.com/s/meme/Two-Buttons.jpg"
          />
          {chosenCards.length ? (
            <h5>
              The judge will select a card out of the ones diplayed below...
            </h5>
          ) : (
            <h5>Players are choosing their cards...</h5>
          )}

          <div className="card-container-judgeview">{mappedChosenCards}</div>
        </div>
        {winnerCard.length ? this.props.history.push("/winner") : null}
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
)(JudgeView);
