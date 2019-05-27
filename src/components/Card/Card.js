import React, { Component } from "react";

import "./Card.scss";

function Card(props) {
  return (
    <div className="card">
      <p>{props.content}</p>
      <button onClick={()=>props.chooseCard(props.card)}>CHOOSE CARD!</button>
    </div>
  );
}

export default Card;
