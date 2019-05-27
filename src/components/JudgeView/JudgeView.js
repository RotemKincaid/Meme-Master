import React, { Component } from "react";
import Card from "../Card/Card";
import "./JudgeView.scss";

class JudgeView extends Component {
  render() {
    return (
      <div className="judgeview-main">
        This is JudgeView Component!
        <h3>Judge is thinking...</h3>
        <img
          className="meme-image-judgeview"
          src="https://imgflip.com/s/meme/Two-Buttons.jpg"
        />
        <h5>judge will select a card out of the ones diplayed below...</h5>
        <div className="card-container-judgeview">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default JudgeView;
