import React, { Component } from "react";
import "./Landing.scss";
import { Link } from "react-router-dom";
import logo from "../../../src/components/logo.png";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <img src={logo} />
        <div className="landing-btns">
          <button>
            <Link className="create-btn" to="/creategame">
              CREATE GAME
            </Link>
          </button>
          <br />
          <button>
            <Link className="join-btn" to="/createuser">
              JOIN GAME
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

export default Landing;
