// Zero To Mastery Academy
// Complete Web Developer in 2025: Zero to Mastery
// React :: RoboFriends Project :: Root Component

// imports -------------------------------------------------------------------------------------------------------------

import React from "react";
import SearchBox from "./SearchBox.js";
import CardList from "./CardList.js";
import {robots} from "./robots.js";

// root component class ################################################################################################
class App extends React.Component {

  // constructor method ------------------------------------------------------------------------------------------------
  constructor() {
    super();
    this.state = {filteredRobots: robots}
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  // search change event handler ---------------------------------------------------------------------------------------
  onSearchChange(event) {
    console.log(event.target.value);
    this.setState(
      {filteredRobots: robots.filter(robot => robot.name.toLowerCase().includes(event.target.value.toLowerCase()))}
    );
  }

  // render method -----------------------------------------------------------------------------------------------------
  render() {
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox changeHandler={this.onSearchChange} />
        <CardList robots={this.state.filteredRobots} />
      </div>
    );
  }
}

// exports #############################################################################################################

export default App;
