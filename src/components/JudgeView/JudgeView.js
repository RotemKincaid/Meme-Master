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
        <Card />
      </div>
    );
  }
}

export default JudgeView;
