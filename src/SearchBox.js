// Zero To Mastery Academy
// Complete Web Developer in 2025: Zero to Mastery
// React :: RoboFriends Project :: Search Box Component

// imports -------------------------------------------------------------------------------------------------------------

import React from "react";

// search box component class ##########################################################################################
class SearchBox extends React.Component {

  // render method -----------------------------------------------------------------------------------------------------
  render() {
    return (
      <div className="pa2">
        <input
          className="ba b--green pa3 bg-lightest-blue"
          type="search"
          placeholder="Search Robots"
          onChange={this.props.changeHandler} />
      </div>
    );
  }
}

// exports #############################################################################################################

export default SearchBox;
