import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        This is Header Component!
        <nav>
          <li>
            <Link to="/">Landing</Link>
          </li>
          <li>
            <Link to="/creategame">Create Game</Link>
          </li>
          <li>
            <Link to="/createuser">Create user</Link>
          </li>
          <li>
            <Link to="/joingame">Join Game</Link>
          </li>
          <li>
            <Link to="/instructions">Instructions</Link>
          </li>
          <li>
            <Link to="/lobby">Lobby</Link>
          </li>
          <li>
            <Link to="/playerview">Player view</Link>
          </li>
          <li>
            <Link to="/judgeview">Judge view</Link>
          </li>
          <li>
            <Link to="/scores">scores</Link>
          </li>
        </nav>
      </div>
    );
  }
}

export default Header;
