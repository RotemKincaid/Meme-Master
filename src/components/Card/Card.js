import React, { Component } from "react";

import "./Card.scss";

function Card(props) {
  return (
    <div
      
      onClick={()=>props.chooseCard(props.card)}
      className="card"
    >
      <p>{props.content}</p>
      
    </div>
  );
}

export default Card;
