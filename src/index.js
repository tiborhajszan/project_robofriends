// Zero To Mastery Academy
// Complete Web Developer in 2025: Zero to Mastery
// React :: RoboFriends Project :: Home Page JavaScript

// imports -------------------------------------------------------------------------------------------------------------

import React from "react";
import ReactDOM from "react-dom/client";
import { robots } from "./robots.js";
import "./index.css";
import Hello from "./Hello.js";
import CardList from "./CardList.js";
import "tachyons";
import reportWebVitals from "./reportWebVitals";

// rendering root component --------------------------------------------------------------------------------------------

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Hello greeting={"Hello React Ninja!"} />
    <CardList robots={robots} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
