import React, { Component } from "react";
import Scores from "../Scores/Scores";

class WinnerPage extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false
    };
  }

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
      <div>
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

export default WinnerPage;
