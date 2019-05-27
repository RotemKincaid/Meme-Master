import React, { Component } from "react";
import Card from "../Card/Card";
import axios from "axios";
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
<<<<<<< HEAD
      game: {},
      chosen_card: {}
=======
      chosenCard: "",
      game: {}
>>>>>>> 9e01c6405af840832798d024cb186bd95264428c
    };
  }

  componentDidMount() {
    this.getCards();
    this.setState({
      socket: this.props.socket.socket
    });

    console.log(
      "socket at component did mount player view",
      this.props.socket.socket
    );

    this.joinRoom(this.props.socket.socket);
  }

  joinRoom = socket => {
    // const {socket} = this.state
    console.log("SOCKET AT JOIN ROOM", socket);
    // const {socket} = this.props.socket.socket
    const { gamePin } = this.props.gamePin;

    socket.emit("join room at player view", { gamePin });

    socket.on("get game after join room", game => {
      console.log("game sent from server", game);
      this.setState({
        game: game
      });
      this.props.setGameObject(game);
    });
  };

  getCards = () => {
    // axios.get("/api/cards2").then(cards => {
    //   console.log(cards);

    const {username} = this.props.gameObject
    console.log(username)
    const { gameObject } = this.props.gameObject;
    const {players} = gameObject
    let playerIndex = players.findIndex(player => player.username === username)
    console.log('PLAYER INDEX AT GET CARDS', playerIndex)
    
    // const { gameObject } = this.props.gameObject;
    
    this.setState({
      cards: gameObject.players[playerIndex].hand
    });
  };

    this.setState({
      cards: gameObject.players[playerIndex].hand
    });
  };

  chooseCard = card => {
    const { username } = this.props.gameObject;
    const { gameObject } = this.props.gameObject;
    const { players } = gameObject;
    let playerIndex = players.findIndex(player => player.username === username);

    const { gamePin } = this.props.gamePin;
    console.log("card at choosecard", card);
    console.log("this.props at chooseCard", this.props);
    const { socket } = this.state;
    console.log("socket at choose card", socket);

    this.setState({
      chosen_card: card
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
    });
    this.getCards()

  chooseCard = card => {
    // const { cards } = this.state
    console.log(card, "Looking for me?");
    this.setState({
      chosenCard: card
    });
  };

  render() {
    console.log(this.props);
    console.log(this.state.cards, "CARDS FROM PLAYERVIEW");
    console.log("the chosen card", this.state.chosenCard);
    const { cards } = this.state;
    const mappedCards = this.state.cards.map(card => {
      return (
        <div>
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
        <h3>User1's turn!</h3>
        <img
          className="meme-image-playerview"
          src="https://imgflip.com/s/meme/Two-Buttons.jpg"
        />

        <h4>Choose the funniest card that matches the picture....</h4>
        
        <div className="card-container">{mappedCards}</div>
        <button>
          <Link to="judgeview">NEXT</Link>
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
)(PlayerView);
