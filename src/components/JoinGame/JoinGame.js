import React, { Component } from "react";
import {Link} from 'react-router-dom'

class JoinGame extends Component {
  render() {
    return (
      <div className="join-game">
        This is JoinGame
        <h1>This is going to be the logo!</h1>
        <h3>Enter Game PIN:</h3>
        <input />
        <Link to='/createuser'><button>NEXT</button></Link>
      </div>
    );
  }
}

export default JoinGame;
