// Zero To Mastery Academy
// Complete Web Developer in 2025: Zero to Mastery
// React :: RoboFriends Project :: Card Component

// imports -------------------------------------------------------------------------------------------------------------

import React from "react";
import "./Card.css";

// card component function #############################################################################################

function Card(props) {
  return (
    <div className="card bg-light-green shadow-5 grow">
      <img src={`https://robohash.org/${props.id}?size=200x200`} alt={props.name} />
      <h2 className="tc">{props.name}</h2>
      <p className="tc">{props.email}</p>
    </div>
  );
}

// exports #############################################################################################################

export default Card;
