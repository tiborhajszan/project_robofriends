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
    this.state = {
      allRoborts: [],
      listedRobots: [],
    };
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  // search change event handler ---------------------------------------------------------------------------------------

  onSearchChange(event) {
    const filteredRobots = this.state.allRoborts.filter(
      robot => robot.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    this.setState({listedRobots: filteredRobots});
  }

  // render method -----------------------------------------------------------------------------------------------------

  render() {
    if (this.state.allRoborts.length === 0) {
      return (
        <div>
          <Hello title={"Loading . . ."} />
        </div>
      );
    } else {
      return (
        <div>
          <Hello title={"RoboFriends"} />
          <SearchBox changeHandler={this.onSearchChange} />
          <Scroll><CardList robots={this.state.listedRobots} /></Scroll>
        </div>
      );
    }
  }

  // component did mount method ----------------------------------------------------------------------------------------

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({allRoborts: users, listedRobots: users}));
}

// root component class ends -------------------------------------------------------------------------------------------

}

// exports #############################################################################################################

export default App;
