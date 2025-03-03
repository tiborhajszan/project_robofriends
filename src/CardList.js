// Zero To Mastery Academy
// Complete Web Developer in 2025: Zero to Mastery
// React :: RoboFriends Project :: Card List Component

// imports -------------------------------------------------------------------------------------------------------------

import React from "react";
import Card from "./components/Card.js";

// card list component class ###########################################################################################
class CardList extends React.Component {
  
  // render method -----------------------------------------------------------------------------------------------------
  render() {
    return (
      <div>{
        this.props.robots.map(
          user => {return <Card key={user.id} id={user.id} name={user.name} email={user.email} />}
        )
      }</div>
    );
  }

}

// exports #############################################################################################################

export default CardList;
