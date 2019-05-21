import React, { Component } from "react";
import {Link} from 'react-router-dom'
import './CreateUser.scss'

class CreateUser extends Component {
  render() {
    return (
    <div className='createuser'>This is CreateUser Component!
      <h2>USERNAME:</h2>
      <input />
      <h2>SELECT AVATAR:</h2>
      <Link to='/lobby'><button>NEXT</button></Link>
    </div>
    );
  }
}

export default CreateUser;
