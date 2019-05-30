import React, { Component } from "react";

// import logo from "../../../src/components/logo.png";
import logo from "./mememasterlogo.png";

import "./Landing.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { setSocket } from "../../dux/reducer";
import { connect } from "react-redux";

import io from "socket.io-client";

//if hosting take local host out
// const socket = io();
const socket = io("http://localhost:4052");
console.log("new socket connection", socket);

class Landing extends Component {
  componentDidMount() {
    axios.get("/api/cards1").then(cards => {
      console.log("cards from db are on server");
    });
    axios.get("/api/media").then(media => {
      console.log("media from db are on server");
    });

    this.props.setSocket(socket);
  }

  render() {
    console.log(this.props.socket.socket);

    return (
      <div className="landing">
        
        <img src={logo} alt ='logo' />
        
        <div className="landing-btns">
          <Link to="/creategame">
            <button className="create-btn">CREATE GAME</button>
          </Link>
          <br />
          <Link className="join-btn" to="/createuser">
            <button>JOIN GAME</button>
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    socket: state.socket
  };
}

const mapDispatchToProps = {
  setSocket: setSocket
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
