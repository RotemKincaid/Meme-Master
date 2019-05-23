import React, { Component } from "react";
import {Link} from 'react-router-dom'
import './Lobby.scss'

import {connect} from "react-redux";
import {setGameObject} from '../../dux/reducer'

class Lobby extends Component {

  
  render() {
    return (
    <div className='lobby'>This is Lobby Component!
      <h1>PLAYERS</h1>
      <div>
        'this will display the players list as they join'

      </div>
      <button><Link className='link' to='/playerview'>CLICK WHEN YOU ARE READY! -playerview-</Link></button>
      <button><Link className='link' to='/judgeview'>CLICK WHEN YOU ARE READY! -judgeview-</Link></button>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gamePin: state.gamePin,
    gameObject: state.gameObject
  };
}

const mapDispatchToProps = {
  setGameObject: setGameObject
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lobby);
