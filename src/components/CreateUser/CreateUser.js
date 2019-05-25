import React, { Component } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "./CreateUser.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setGamePin, setGameObject } from "../../dux/reducer";

import io from "socket.io-client";
const socket = io.connect("http://localhost:4052");


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
      avatarData: [
        "https://s3-us-west-1.amazonaws.com/memes-project/avatars/commander.jpeg",
        "https://s3-us-west-1.amazonaws.com/memes-project/avatars/bigmouth.jpeg",
        "https://s3-us-west-1.amazonaws.com/memes-project/avatars/chinaman.jpeg",
        "https://s3-us-west-1.amazonaws.com/memes-project/avatars/copsmoking.png",
        "https://s3-us-west-1.amazonaws.com/memes-project/avatars/flattop.jpeg"
      ]
    };

    socket.on("send game after player joined", game => {
      this.setState({
        game: game
      });

      this.props.setGameObject(game);
    });

    socket.on("welcome to", data => {
      console.log("Welcome, ", data);
      const { gamePin } = this.props.gamePin;
      this.setState({
        username: data,
        players: data,
        gamePin
      });
    });

    socket.on("send updated game", game => {
      console.log("game sent from server:", game);
      this.setState({
        game: game
      });
      this.props.setGameObject(game);
    });
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
  };

  pinMatch = () => {
    if (this.state.gamePin === this.props.gamePin.gamePin) {
      console.log("GAME PIN MATCHES");
    } else {
      console.log("SOMETHING IS WRONG");
    }
  };

  render() {
    const mappedAvatars = this.state.avatarData.map(avatars => {
      return (
        console.log()
        
          // <img src={avatars.avatarData} />
      );
    });

    console.log(this.props.gameObject);
    console.log(this.props.gameObject);
    console.log(this.props.gamePin);
    const { gamePin } = this.props.gamePin;
    const { username, players } = this.state;
    const mappedNames = players.map(name => {
      return <div key={name.id}>{name} Joined</div>;
    });

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
        <input type="text" placeholder="nickname" onChange={this.nameHandler} />
        <h2>Select Avatar:</h2>
        <div className="avatarcontainer">{mappedAvatars}</div>
        <br />
        <br />
        <button
          onClick={() =>
            socket.emit("Join Room", {
              username: username,
              players: players.push(username),
              gamePin: this.state.gamePin
                ? this.state.gamePin
                : this.props.gamePin.gamePin
            })
          }
        >
          Join Room- click here first!
        </button>
        <button>
          <Link className="link" to="/lobby">
            NEXT
          </Link>
        </button>
        <h2>
          Joined Room:<div>{mappedNames}</div>
        </h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gamePin: state.gamePin,
    gameObject: state.gameObject
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
