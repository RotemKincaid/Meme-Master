import React, { Component } from "react";

import "./Card.scss";

function Card(props) {
  return (
    <div className="card">
      <p>{props.content}</p>
    </div>
  );
}

export default Card;
