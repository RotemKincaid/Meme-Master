import React, { Component } from "react";
import "./Instructions.scss";
import logo from "../../components/logo.png";

class Instructions extends Component {
  render() {
    return (
      <div className="instructions-main">
        <div className="instructions-inner">
          <img src={logo} />
          <h1>Just some quick instructions:</h1>
          <p>
            Compete to create the funniest meme by pairing caption cards with
            the photo card in play. The rotating judge will pick the best
            combination each round.
          </p>
        </div>
      </div>
    );
  }
}

export default Instructions;
