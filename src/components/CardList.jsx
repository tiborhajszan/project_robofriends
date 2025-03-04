// Zero To Mastery Academy
// Complete Web Developer in 2025: Zero to Mastery
// React :: RoboFriends Project :: Card List Component

// imports -------------------------------------------------------------------------------------------------------------

import React from "react";
import "./CardList.css";
import Card from "./Card.jsx";

// card list component function ########################################################################################

function CardList(props) {
  return (
    <div className="card-list">{
      props.robots.map(
        user => {return <Card key={user.id} id={user.id} name={user.name} email={user.email} />}
      )
    }</div>
  );
}

// exports #############################################################################################################

export default CardList;
