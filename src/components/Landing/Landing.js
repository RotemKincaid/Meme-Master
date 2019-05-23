import React, { Component } from "react";
import './Landing.scss'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Landing extends Component {
  
  componentDidMount(){
    axios.get('/api/cards').then(cards => {
      console.log('cards from db are on server')
    })
    axios.get('/api/media').then(media => {
      console.log('media from db are on server')
    })
  }

  render() {
    
    return (
    <div className='landing'>
        This is Landing Component!
        <h1>MEME MASTER</h1>
        <button><Link className='link' to='/creategame'>CREATE GAME</Link></button><br/>
        <button><Link className='link' to='/joingame'>JOIN GAME</Link></button>
    
        

    </div>
    );
  }
}

export default Landing;
