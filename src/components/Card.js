import React from "react";

const Card = props => {
  return (
    <div onClick={props.clicked}>
      <h2>{props.title}</h2>
      <p>{props.post}</p>
    </div>
  );
};

export default Card;
