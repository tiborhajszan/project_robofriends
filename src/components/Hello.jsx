// Zero To Mastery Academy
// Complete Web Developer in 2025: Zero to Mastery
// React :: RoboFriends Project :: Hello Component

// imports -------------------------------------------------------------------------------------------------------------

import React from "react";
import "./Hello.css";

// hello component function ############################################################################################

function Hello(props) {
  return (
    <div className="hello">
      <h1>{props.title}</h1>
    </div>
  );
}

// exports #############################################################################################################

export default Hello;
