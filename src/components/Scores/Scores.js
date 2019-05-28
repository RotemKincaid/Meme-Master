import React from "react";

import "./Scores.scss";

const Scores = props => {
  console.log('props at scores component',props)

  const {scores} = props

  let mappedScores = scores.map(player => {
    return <div>
      <h1></h1>
    </div>

  })
  return (
    <div
      className="scores-wrapper"
      style={{
        transform: props.openScores ? "translateY(0vh" : "translateY(-100vh)",
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
        <p>Scores content</p>
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
