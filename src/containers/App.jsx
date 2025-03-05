// Zero To Mastery Academy
// Complete Web Developer in 2025: Zero to Mastery
// React :: RoboFriends Project :: Root Component

// imports -------------------------------------------------------------------------------------------------------------

import React from "react";
import {robots} from "./robots.js";
import Hello from "../components/Hello.jsx";
import SearchBox from "../components/SearchBox.jsx";
import CardList from "../components/CardList.jsx";

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
    this.setState(
      {filteredRobots: robots.filter(robot => robot.name.toLowerCase().includes(event.target.value.toLowerCase()))}
    );
  }

  // render method -----------------------------------------------------------------------------------------------------

  render() {
    return (
      <div>
        <Hello title={"RoboFriends"} />
        <SearchBox changeHandler={this.onSearchChange} />
        <CardList robots={this.state.filteredRobots} />
      </div>
    );
  }
}

// exports #############################################################################################################

export default App;
