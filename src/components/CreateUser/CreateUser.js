import React, { Component } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "./CreateUser.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  setGamePin,
  setGameObject,
  setSocket,
  setPlayerUsername
} from "../../dux/reducer";
import avatarData from "./avatarData";

// const {socket} = this.props.socket
// var socket = ""

// const Images = [
//   { image: require("./media/bigmouth.jpeg"), title: "Bigmouth" },
//   { image: require("./media/chinaman.jpeg"), title: "Chinaman" },
//   { image: require("./media/copsmoking.png"), title: "Commander" },
//   { image: require("./media/flattop.jpeg"), title: "FlatTop" }
// ];
class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      players: [],
      username: "",
      avatar: "",
      gamePin: null,
      game: {},
      avatarData: avatarData,
      socket: ""
    };

    // const {socket} = this.props.socket
    // socket = this.props.socket

    console.log("socket at create user constructor", this.state.socket);

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

  componentDidMount() {
    // console.log('this.props. at component did moutn set user',this.props)
    const { gameObject, gamePin } = this.props;
    console.log(gameObject.players);
    console.log(this.state.avatar);

    this.setState({
      // game: gameObject,
      // gamePin: gamePin,
      socket: this.props.socket.socket
    });
  }

  nameHandler = e => {
    this.setState({
      username: e.target.value
    });
    this.props.setPlayerUsername(e.target.value);
  };

  handlePin = e => {
    this.setState({
      gamePin: e.target.value
    });
    this.props.setGamePin(e.target.value);
  };

  pinMatch = () => {
    if (this.state.gamePin === this.props.gamePin.gamePin) {
      console.log("GAME PIN MATCHES");
    } else {
      console.log("SOMETHING IS WRONG");
    }
  };

  avatarSet = avatars => {
    this.setState({
      avatar: avatars
    });
  };

  joinRoom = () => {
    console.log("HIT JOIN ROOM");
    const { username, socket, gamePin, avatar } = this.state;
    // const {gamePin} = this.props.gamePin
    socket.emit("Join Room", {
      username: username,
      avatar: avatar,
      // players: players.push(username),
      gamePin: gamePin
    });
    socket.on("send updated game", game => {
      console.log("game sent from server:", game);
      this.setState({
        game: game
      });
      this.props.setGameObject(game);
    });
  };
  joinRoomAsCreator = () => {
    console.log("HIT JOIN ROOM");
    const { username, socket, avatar } = this.state;
    const { gamePin } = this.props.gamePin;
    socket.emit("Join Room", {
      username: username,
      avatar: avatar,
      // players: players.push(username),
      gamePin: gamePin
    });
    socket.on("send updated game", game => {
      console.log("game sent from server:", game);
      this.setState({
        game: game
      });
      this.props.setGameObject(game);
    });
  };

  resetAvatar = () => {
    this.setState({
      avatar: ""
    });
  };

  render() {
    const { avatarData } = this.state;
    const mappedAvatars = avatarData.map(avatars => {
      // console.log(avatars);
      return (
        <div className="avatar-display">
          <img
            // value={avatars.url}
            src={avatars.url}
            onClick={() => this.avatarSet(avatars)}
          />
          {/* <button onClick={() => this.avatarSet(avatars)}>Choose</button> */}
        </div>
      );
    });
    console.log("PROPS FROM REDUX AT CREATE USER", this.props);
    console.log("state at create user", this.state);

    // const {socket} = this.props.socket
    // console.log(this.props.gamePin);
    const { gamePin } = this.props.gamePin;
    const { username, players, socket } = this.state;
    const { avatar } = this.state;
    // const mappedNames = players.map(name => {
    //   return <div key={name.id}>{name} Joined</div>;
    // });

    return (
      <div className="createuser">
        <div className="createuser-inner">
          <div className="pin-username">
            <h2>Your Game Pin: {this.props.gamePin.gamePin}</h2>
            {this.props.gamePin.gamePin ? (
              <div />
            ) : (
              <input
                value={this.state.gamePin}
                placeholder="Enter game pin..."
                onChange={this.handlePin}
              />
            )}
            <br />
            <h2>Enter Username</h2>
            <input
              type="text"
              placeholder="Be creative..."
              onChange={this.nameHandler}
            />
          </div>

          <div className="avatar-container">
            {avatar.url ? (
              <div>
                <h2>Your Selected Avatar:</h2>
                <img className="selected-avatar" src={avatar.url} />
                <button className="reset-avatar" onClick={this.resetAvatar}>
                  NOT SURE?
                </button>
              </div>
            ) : (
              <div>
                <h2>Tap Image To Select Avatar:</h2>
                <div className="avatar-images">{mappedAvatars}</div>
              </div>
            )}

            {this.props.gamePin.gamePin ? (
              <button className="join-btn" onClick={this.joinRoomAsCreator}>
                <Link to="/lobby">JOIN GAME</Link>
              </button>
            ) : (
              <button className="join-btn" onClick={this.joinRoom}>
                <Link to="/lobby">JOIN GAME</Link>
              </button>
            )}
          </div>
        </div>
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
  setGameObject: setGameObject,
  setPlayerUsername: setPlayerUsername
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateUser);
