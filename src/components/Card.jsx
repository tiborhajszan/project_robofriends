// Zero To Mastery Academy
// Complete Web Developer in 2025: Zero to Mastery
// React :: RoboFriends Project :: Card Component

// imports -------------------------------------------------------------------------------------------------------------

import React from "react";
import "./Card.css";

// card component function ---------------------------------------------------------------------------------------------

function Card(props) {
  return (
    <div className="card">
      <div className="img-box">
        <img src={`https://robohash.org/${props.id}?size=200x200`} alt={props.name} />
      </div>
      <div className="text-box">
        <h2>{props.name}</h2>
        <p>{props.email}</p>
      </div>
    </div>
  );
}

// exports -------------------------------------------------------------------------------------------------------------

export default Card;
