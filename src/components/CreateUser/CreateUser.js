import React, { Component } from "react";
import "./CreateUser.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setGamePin, setGameObject, setSocket } from "../../dux/reducer";

import io from "socket.io-client";
// const {socket} = this.props.socket
// var socket = ""


class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      players: [],
      username: "",
      avatar: "",
      gamePin: null,
      game: {},
      socket: ''
    };

    

    // const {socket} = this.props.socket
    // socket = this.props.socket
    
    console.log('socket at create user constructor', this.state.socket)

    // socket.on("send game after player joined", game => {
    //   this.setState({
    //     game: game
    //   });

    //   this.props.setGameObject(game);
    // });

    // socket.on("welcome to", data => {
    //   console.log("Welcome, ", data);
    //   const { gamePin } = this.props.gamePin;
    //   this.setState({
    //     username: data,
    //     players: data,
    //     gamePin
    //   });
    // });

    
  
    




  }

  componentDidMount (){
    // console.log('this.props. at component did moutn set user',this.props)
    const {gameObject, gamePin} = this.props
    console.log(gameObject.players)
    this.setState({
      // game: gameObject,
      // gamePin: gamePin,
      socket: this.props.socket.socket
      
    })
  }

  nameHandler = e => {
    this.setState({
      username: e.target.value
    });
  };

  handlePin = e => {
    this.setState({
      gamePin: e.target.value
    });
    this.props.setGamePin(e.target.value)
  };

  pinMatch = () => {
    if (this.state.gamePin === this.props.gamePin.gamePin) {
      console.log("GAME PIN MATCHES");
    } else {
      console.log("SOMETHING IS WRONG");
    }
  };

  joinRoom = () => {
    console.log('HIT JOIN ROOM')
    const {username, socket, gamePin} = this.state 
    // const {gamePin} = this.props.gamePin
    socket.emit("Join Room", {
              username: username,
              // players: players.push(username),
              gamePin: gamePin
            })
            socket.on("send updated game", game => {
              console.log("game sent from server:", game);
              this.setState({
                game: game
              });
              this.props.setGameObject(game);
            });
  }
  joinRoomAsCreator = () => {
    console.log('HIT JOIN ROOM')
    const {username, socket} = this.state 
    const {gamePin} = this.props.gamePin
    socket.emit("Join Room", {
              username: username,
              // players: players.push(username),
              gamePin: gamePin
            })
            socket.on("send updated game", game => {
              console.log("game sent from server:", game);
              this.setState({
                game: game
              });
              this.props.setGameObject(game);
            });
  }





  render() {
    console.log('PROPS FROM REDUX AT CREATE USER', this.props)
    console.log('state at create user', this.state)

    // const {socket} = this.props.socket
    // console.log(this.props.gamePin);
    const { gamePin } = this.props.gamePin;
    const { username, players , socket} = this.state;
    // const mappedNames = players.map(name => {
    //   return <div key={name.id}>{name} Joined</div>;
    // });
    

    return (
      <div className="createuser">
        This is the Create User Component!
        <h2>game pin{this.props.gamePin.gamePin}</h2>
        {this.props.gamePin.gamePin ? (
          <div />
        ) : (
          <input
            value={this.state.gamePin}
            placeholder="game pin"
            onChange={this.handlePin}
          />
        )}
        <h2>Enter Username</h2>
        <input
          // value={this.state.username}
          type="text"
          placeholder="nickname"
          onChange={this.nameHandler}
        />
        {/* <button
          onClick={() => {
            socket.emit("name", {
              username: username,
              players: players.push(username),
              gamePin: this.state.gamePin
            });
          }}
        >
          Send Name
        </button> */}
        <h2>Select Avatar:</h2>
        <select>
          <option />
          <option value="avatar url two">2</option>
          <option value="avatar url three">3</option>
        </select>
        <br />

        {this.props.gamePin.gamePin ? (
          <button onClick={this.joinRoomAsCreator}>JOIN GAME</button>
        ) : (
          <button onClick={this.joinRoom}>JOIN GAME</button>
        )}




        
        {/* <button
          onClick={() => this.joinRoom}>
          Join Room- click here first!
        </button> */}
        <button
        // onClick={() =>
        //   socket.emit("Join Room", {
        //     username: username,
        //     gamePin: 12345
        //   })
        // }
        >
          <Link className="link" to="/lobby">
            NEXT
          </Link>
        </button>
        <h2>
          {/* Joined Room:<div>{mappedNames}</div> */}
        </h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gamePin: state.gamePin,
    gameObject: state.gameObject,
    socket: state.socket
  };
}

const mapDispatchToProps = {
  setGamePin: setGamePin,
  setGameObject: setGameObject
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateUser);