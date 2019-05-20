import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Header extends Component {
    render(){
        return(
            <nav>
                Nav bar will go here
                <Link to='/'><li>Landing</li></Link>
                <Link to='/creategame'><li>Create Game</li></Link>
                <Link to='/joingame'><li>Join Game</li></Link>
                <Link to='/createuser'><li>Create User</li></Link>
                <Link to='/lobby'><li>Lobby</li></Link>
                <Link to='/playerview'><li>Player View</li></Link>
                <Link to='/scores'><li>Scores</li></Link>
                <Link to='/judgeview'><li>Judge View</li></Link>
            </nav>
        )
    }
}