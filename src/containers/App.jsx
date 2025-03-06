// Zero To Mastery Academy
// Complete Web Developer in 2025: Zero to Mastery
// React :: RoboFriends Project :: Root Component

// imports -------------------------------------------------------------------------------------------------------------

import React from "react";
// import {robots} from "./robots.js";
import Hello from "../components/Hello.jsx";
import SearchBox from "../components/SearchBox.jsx";
import Scroll from "../components/Scroll.jsx";
import CardList from "../components/CardList.jsx";

// root component class ################################################################################################

class App extends React.Component {

  // constructor method ------------------------------------------------------------------------------------------------

  constructor() {
    super();
    this.allRoborts = null;
    this.state = {filteredRobots: []};
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  // search change event handler ---------------------------------------------------------------------------------------

  onSearchChange(event) {
    this.setState({
      filteredRobots: this.allRoborts.filter(
        robot => robot.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    });
  }

  // render method -----------------------------------------------------------------------------------------------------

  render() {
    if (this.allRoborts === null) {
      return (
        <div>
          <Hello title={"Loading..."} />
        </div>
      );
    } else {
      return (
        <div>
          <Hello title={"RoboFriends"} />
          <SearchBox changeHandler={this.onSearchChange} />
          <Scroll><CardList robots={this.state.filteredRobots} /></Scroll>
        </div>
      );
    }
  }

  // component did mount method ----------------------------------------------------------------------------------------

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({filteredRobots: users}));
    // console.log(this.state.filteredRobots);
    // this.allRoborts = this.state.filteredRobots;
  }

// root component class ends -------------------------------------------------------------------------------------------

}

// exports #############################################################################################################

export default App;
