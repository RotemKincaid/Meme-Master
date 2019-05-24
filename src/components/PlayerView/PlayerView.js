import React, { Component } from "react";
import Card from "../Card/Card";
import axios from "axios";
import "./PlayerView.scss";

class PlayerView extends Component {
  constructor() {
    super();

    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    this.getCards();
  }

  getCards = () => {
    axios.get("/api/cards2").then(cards => {
      console.log(cards);
      this.setState({
        cards: cards.data
      });
    });
  };

  render() {
    console.log(this.state.cards, "CARDS FROM PLAYERVIEW");
    const mappedCards = this.state.cards.map(card => {
      return (
        <div>
          <Card />
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

export default PlayerView;
