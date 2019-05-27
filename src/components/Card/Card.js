import React, { Component } from "react";

import "./Card.scss";

function Card(props) {
  return (
    <div
      key={props.card.card_id}
      onClick={card => props.chooseCard(card)}
      className="card"
    >
      <p>{props.content}</p>
    </div>
  );
}

export default Card;
