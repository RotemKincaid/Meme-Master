import React, { Component } from "react";
import Card from "../Card/Card";
import axios from "axios";
import "./PlayerView.scss";
import { connect } from "react-redux";
import { setGameObject, setSocket } from "../../dux/reducer";

class PlayerView extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      image: "",
      socket: ""
    };
  }

  componentDidMount() {
    this.getCards();
    this.setState({
      socket: this.props.socket.socket
    });
  }

  getCards = () => {
    // axios.get("/api/cards2").then(cards => {
    //   console.log(cards);
    const { gameObject } = this.props.gameObject;
    this.setState({
      cards: gameObject.players[0].hand
    });
  };

  render() {
    console.log(this.state.cards, "CARDS FROM PLAYERVIEW");
    const { cards } = this.state;
    const mappedCards = this.state.cards.map(card => {
      return (
        <div>
          <Card cards={cards} content={card.content} />
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

const mapDispatchToProps = {
  setGameObject: setGameObject,
  setSocket: setSocket
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerView);
