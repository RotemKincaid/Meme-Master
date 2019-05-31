import React, { Component } from "react";
import Card from "../Card/Card";
// import axios from "axios";
import "./PlayerView.scss";
import { connect } from "react-redux";
import { setGameObject, setSocket } from "../../dux/reducer";
import { Link } from "react-router-dom";

// import io from "socket.io-client";

class PlayerView extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      image: "",
      socket: "",
      game: {},
      chosenCard: [],
      play: true,
      pause: false
    };
  }

  componentDidMount() {
    if (this.props.socket) {
      // this.getCards();
      this.setState({
        socket: this.props.socket
      });

      console.log(
        "socket at component did mount player view",
        this.props.socket
      );

      this.joinRoom(this.props.socket);
    } else {
      this.props.history.push("/");
    }
    this.props.song2.play();
  }
  play = () => {
    this.setState({
      play: true,
      pause: false
    });
    // this.props.song2.play();
  };

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
        image: game.current_image[0].media_url
      });
      this.props.setGameObject(game);
      this.getCards(game);
    });
  };

  getCards = game => {
    console.log("game at get cards", game);
    // axios.get("/api/cards2").then(cards => {
    // console.log(th);

    const { username } = this.props;
    console.log("USERNAME AT GET CARDS ON PLAYER VIEW", username);
    const { gameObject } = this.props;
    const { players } = gameObject;
    let playerIndex = players.findIndex(player => player.username === username);
    console.log("PLAYER INDEX AT GET CARDS", playerIndex);

    // const { gameObject } = this.props.gameObject;

    this.setState({
      cards: gameObject.players[playerIndex].hand
    });
  };

  chooseCard = card => {
    const { username } = this.props;

    const { gamePin } = this.props;
    console.log("card at choosecard", card);
    console.log("this.props at chooseCard", this.props);
    const { socket } = this.state;
    console.log("socket at choose card", socket);

    this.setState({
      chosenCard: [card]
    });

    socket.emit("choose card", {
      gamePin: gamePin,
      username: username,
      card: card
      // username: this.props.username.username
    });

    socket.on("get update game with chosen card", game => {
      console.log("game sent from server after a card was choosen", game);
      this.setState({
        game: game
      });
      this.props.setGameObject(game);
      this.getCards();
    });
    this.getCards();
  };

  // chooseCard = card => {
  //   // const { cards } = this.state
  //   console.log(card, "Looking for me?");
  //   this.setState({
  //     chosenCard: card
  //   });
  // };

  render() {
    console.log("THIS.STATE AT PLAYER VIEW", this.state);

    const { chosenCard, image } = this.state;
    const mappedChosenCard = chosenCard.map(card => {
      return (
        <div key={card.card_id}>
          <Card card={card} content={card.content} />
        </div>
      );
    });

    console.log("props at PLAYERVIEW", this.props);
    //get judge
    const { gameObject, username } = this.props;
    var judgeUsername = gameObject.judge[0].username;

    var judgeAvatar = gameObject.judge[0].avatar;

    console.log("JUDGEUSERNAME", judgeUsername);
    var playerUsername = username;

    console.log(this.state.cards, "CARDS FROM PLAYERVIEW");
    console.log("the chosen card", this.state.chosenCard);

    const mappedCards = this.state.cards.map(card => {
      return (
        <div className="chosen-player-card" key={card.card_id}>
          <Card
            card={card}
            chooseCard={this.chooseCard}
            content={card.content}
          />
        </div>
      );
    });

    return (
      <div className="playerview">
        <div className="playerview-avatar-name">
          <h3 className="turn">
            <img
              alt="lobby-avatar"
              className="playerview-avatar"
              src={judgeAvatar}
            />
            <span>{judgeUsername}</span> is the judge for this round!{" "}
            {/* <img
              alt="lobby-avatar"
              className="playerview-avatar"
              src={player.avatar}
            /> */}
          </h3>
        </div>
        <img alt="playerview" className="meme-image-playerview" src={image} />

        <h4>Choose the funniest card that best matches the picture....</h4>
        {chosenCard.length ? (
          <div>
            <div>{mappedChosenCard}</div>
            <button className="playerview-next">
              <Link to="judgeview">NEXT</Link>
            </button>
          </div>
        ) : (
          <div>
            <div className="card-container">{mappedCards}</div>
          </div>
        )}

        {playerUsername === judgeUsername
          ? this.props.history.push("/judgeview")
          : null}

        {this.state.chosenCard.length
          ? this.props.history.push("/judgeview")
          : null}
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
  setSocket: setSocket
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerView);
