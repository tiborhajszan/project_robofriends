// Zero To Mastery Academy
// Complete Web Developer in 2025: Zero to Mastery
// React :: RoboFriends Project :: Scroll Component

// imports -------------------------------------------------------------------------------------------------------------

import React from "react";
import "./Scroll.css";

// scroll component function ###########################################################################################

function Scroll(props) {
  return (
    <div className="scroll">{props.children}</div>
  );
}

// exports #############################################################################################################

export default Scroll;
