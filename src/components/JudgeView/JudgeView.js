import React, { Component } from "react";
import Card from "../Card/Card";
import "./JudgeView.scss";
import { connect } from "react-redux";
import { setGameObject, setSocket } from "../../dux/reducer";
import { Link } from "react-router-dom";

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
    console.log("SOCKET AT JOIN ROOM on judge", socket);
    // const {socket} = this.props.socket.socket
    const { gamePin } = this.props.gamePin;

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
    const { gamePin } = this.props.gamePin;
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

  // getChosenCards = (gamePin) => {
  //   console.log('game pin at get chosen cards',gamePin)
  //   // const {gamePin} = game
  //   const {socket} = this.state
  //   console.log('socket at get chosen cards', socket)

  //   socket.emit("get chosen cards", {gamePin})

  //   socket.on('receive chosen cards and updated game', game => {
  //     console.log('game sent from server after to get updated chosen cards')
  //     // this.setState({
  //     //   ''
  //     // })
  //     this.props.setGameObject(game)

  //     const {players} = game
  //     console.log(players)

  //   })

  // this.setState({
  //   chosenCards: gameObject.players[playerIndex].hand
  // });
  // }

  render() {
    // console.log(this.props)
    // const {current_image} = this.props.gameObject.gameObject
    // const image = current_image[0].media_url
    // console.log(image)

    const { image, chosenCards } = this.state;

    let mappedChosenCards = chosenCards.map(card => {
      return (
        <div key={card.card_id} className="card-container-judgeview">
          <Card
            card={card}
            content={card.content}
            chooseCard={this.chooseCard}
          />
        </div>
      );
    });

    return (
      <div className="judgeview-main">
        <div className="judgeview-inner">
          <h3>Judge is thinking...</h3>
          <img
            alt="judge"
            className="meme-image-judgeview"
            src={image}
            // src="https://imgflip.com/s/meme/Two-Buttons.jpg"
          />
          <h5>
            judge will select a winner card out of the ones diplayed below...
          </h5>
          {/* <div className="card-container-judgeview">
          <Card />
          <Card />
          <Card />
        </div> */}
          <div className="card-container-judgeview">{mappedChosenCards}</div>
          <Link to="/winner">
            <button>WHO'S THE WINNER!!?</button>
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
