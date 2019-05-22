import React, { Component } from "react";
import './Landing.scss'
import {Link} from 'react-router-dom'
import axios from 'axios'
import CreateGame from './../../components/CreateGame/CreateGame.js'

class Landing extends Component {
  

  render() {
    console.log(this.state)

    
    
    return (
    <div className='landing'>
        This is Landing Component!
        <h1>MEME MASTER</h1>
        <Link to='/creategame'><button>CREATE GAME</button></Link><br/>
        <CreateGame />
        <Link to='/joingame'><button>JOIN GAME</button></Link>
    
        

    </div>
    );
  }
}

export default Landing;
