import React, { Component } from "react";
import {Link} from 'react-router-dom'
import './CreateUser.scss'
import axios from 'axios'

import io from 'socket.io-client'
import {connect} from 'react-redux'
import {setUser} from '../../dux/reducer'

const socket = io('http://localhost:4052')

class CreateUser extends Component {
  constructor(){
    super()

    this.state = {
      username: ''
    }
  }

  createUsername = () => {

    const {username} = this.state
    this.props.setUser(username)

    


    // axios.post('/api/createuser', {username: username}).then(res => {
    //   console.log('res at create username', res)
    //   this.setState({
    //     username: res.data.username
    //   })
    // })
  }

  render() {
    console.log('state at create user', this.state)
    console.log('this props at redux at create user', this.props)
    return (
    <div className='createuser'>This is CreateUser Component!
      <h2>USERNAME:</h2>
      <input 
        type='text'
        onChange={(e) => this.setState({username: e.target.value})}
        value={this.state.username}  
      />
      <button onClick={this.createUsername}>Submit</button>
      <h2>{this.state.username}</h2>
      <h2>SELECT AVATAR:</h2>
      <Link to='/lobby'><button>NEXT</button></Link>
    </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    gamePin: reduxState.gamePin,
    users: reduxState.users
  };
};

const mapDispatchToProps = {
  setUser: setUser
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
