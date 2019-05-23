import React, { Component } from "react";
import './Landing.scss'
import {Link} from 'react-router-dom'

class Landing extends Component {
  render() {
    
    return (
    <div className='landing'>
        This is Landing Component!
        <h1>MEME MASTER</h1>
        <button><Link className='link' to='/creategame'>CREATE GAME</Link></button><br/>
        <button><Link className='link' to='/createuser'>JOIN GAME</Link></button>
    
        

    </div>
    );
  }
}

export default Landing;
