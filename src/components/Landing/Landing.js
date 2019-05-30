import React, { Component } from "react";

// import logo from "../../../src/components/logo.png";
import logo from "./mememasterlogo.png";

import "./Landing.scss";
import { Link } from "react-router-dom";
// import axios from "axios";
import { setSocket, playSong } from "../../dux/reducer";
import { connect } from "react-redux";
// import song from "../Landing/sillymusic.mp3";

import io from "socket.io-client";

//if hosting take local host out
// const socket = io();
const socket = io("http://localhost:4052");
console.log("new socket connection", socket);

class Landing extends Component {
  constructor() {
    super();

    this.state = {
      play: false,
      pause: true
    };
    // this.audio = new Audio(song);
  }

  componentDidMount() {
    // this.getCardsAndMediaToServer();

    this.props.setSocket(socket);
    this.props.song.play();
  }

  // getCardsAndMediaToServer =() => {
  //   axios.get("/api/cards1").then(res => {
  //     console.log("cards from db are on server", res);
  //   });
  //   axios.get("/api/media").then(res => {
  //     console.log("media from db are on server", res);
  //   });
  

  play = () => {
    this.setState({
      play: true,
      pause: false
    });
    // this.play();
    this.props.playSong();
  };

  pause = () => {
    this.setState({
      play: false,
      pause: true
    });
    // this.props.pauseSong();
  };

  render() {
    console.log(this.props.socket.socket);
    console.log(this.props);

    return (
      <div className="landing">
        {/* <button className="mute">mute{Audio.muted}</button> */}
        <img src={logo} alt="logo" />

        <div className="landing-btns">
          <Link to="/creategame">
            <button className="create-btn">CREATE GAME</button>
          </Link>
          <br />
          <Link className="join-btn" to="/createuser">
            <button>JOIN GAME</button>
          </Link>
        </div>
        <Link to="/instructions">
          <button className="instructions-btn">
            Not sure how the game works? Click here
          </button>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return state;
}

const mapDispatchToProps = {
  setSocket: setSocket,
  playSong: playSong
  // pauseSong: pauseSong
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
