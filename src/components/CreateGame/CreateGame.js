import React, { Component } from "react";
import './CreateGame.scss'
import {Link} from 'react-router-dom'

class CreateGame extends Component {
  render() {
    return( 
    <div className='creategame'>This is CreateGame Component!
      <h1>This is your pin: </h1>
      <h2>'pin will go here'</h2>
      <button><Link className='link' to='/createuser'>NEXT</Link></button>
    
    </div>
    );
  }
}

export default CreateGame;
