// Zero To Mastery Academy
// Complete Web Developer in 2025: Zero to Mastery
// React :: RoboFriends Project :: Card Component

// imports -------------------------------------------------------------------------------------------------------------

import React from "react";

// card component class ################################################################################################
class Card extends React.Component {
  
  // render method -----------------------------------------------------------------------------------------------------
  render() {
    return (
      <div className="dib ma2 bw2 br3 pa3 bg-light-green tc shadow-5 grow">
        <img src={ `https://robohash.org/${ this.props.id }?size=200x200` } alt="Robot Pic" />
        <h2>{ this.props.name }</h2>
        <p>{ this.props.email }</p>
      </div>
    );
  }

}

// exports #############################################################################################################

export default Card;
