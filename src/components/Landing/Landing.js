import React, { Component } from "react";
import './Landing.scss'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Landing extends Component {
  

  render() {
    console.log(this.state)

    
    
    return (
    <div className='landing'>
        This is Landing Component!
        <h1>MEME MASTER</h1>
        <Link to='/creategame'><button>CREATE GAME</button></Link><br/>
        <Link to='/joingame'><button>JOIN GAME</button></Link>
    
        

    </div>
    );
  }
}

export default Landing;
