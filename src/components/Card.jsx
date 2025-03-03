// Zero To Mastery Academy
// Complete Web Developer in 2025: Zero to Mastery
// React :: RoboFriends Project :: Card Component

// imports -------------------------------------------------------------------------------------------------------------

import React from "react";

// card component function #############################################################################################

function Card (props) {
  return (
    <div className="dib ma2 bw2 br3 pa3 bg-light-green tc shadow-5 grow">
      <img src={`https://robohash.org/${props.id}?size=200x200`} alt={props.name} />
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  );
}

// exports #############################################################################################################

export default Card;
