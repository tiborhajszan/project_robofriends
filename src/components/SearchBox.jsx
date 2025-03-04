// Zero To Mastery Academy
// Complete Web Developer in 2025: Zero to Mastery
// React :: RoboFriends Project :: Search Box Component

// imports -------------------------------------------------------------------------------------------------------------

import React from "react";
import "./SearchBox.css";

// search box component function #######################################################################################

function SearchBox(props) {
  return (
    <div className="search-box">
      <input
        className="ba b--green pa3 bg-lightest-blue"
        type="search"
        size="30"
        placeholder="Search Robots by Name"
        onChange={props.changeHandler} />
    </div>
  );
}

// exports #############################################################################################################

export default SearchBox;
