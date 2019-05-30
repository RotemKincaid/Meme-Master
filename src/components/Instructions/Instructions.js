import React, { Component } from "react";
import "./Instructions.scss";
import logo from "../../components/logo.png";
import { Link } from "react-router-dom";
class Instructions extends Component {
  render() {
    return (
      <div className="instructions-main">
        <div className="instructions-inner">
          <img src={logo} alt="logo" />
          <h1>Just some quick instructions:</h1>
          <p>
            Compete to create the funniest meme by pairing caption cards with
            the photo card in play. The rotating judge will pick the best
            combination each round.
          </p>
        </div>
        <Link to="/">
          <button>Got it!</button>
        </Link>
      </div>
    );
  }
}

export default Instructions;
