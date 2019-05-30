import React from "react";

import "./Scores.scss";

const Scores = props => {
  console.log("props at scores component", props);

  const { scores } = props;

  let mappedScores = scores.map((player, index) => {
    return (
      <div key={index}>
        <p>{player.playerUsername}</p>
        <p>{player.score}</p>
        <img src={player.avatar} />
      </div>
    );
  });
  return (
    <div
      className="scores-wrapper"
      style={{
        transform: props.openScores ? "translateY(0vh" : "translateY(-50vh)",
        opacity: props.openScores ? "1" : "0"
      }}
    >
      <div className="scores-header">
        <h3>Game Scores</h3>
        <span className="close-scores-btn" onClick={props.close}>
          X
        </span>
      </div>
      <div className="scores-body">
        <p className="username-scores">{mappedScores}</p>
      </div>
      <div className="scores-footer">
        <button className="cancel-btn" onClick={props.close}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Scores;
