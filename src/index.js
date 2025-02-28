// Zero To Mastery Academy
// Complete Web Developer in 2025: Zero to Mastery
// React :: RoboFriends Project :: Home Page JavaScript

// imports -------------------------------------------------------------------------------------------------------------

import React from "react";
import ReactDOM from "react-dom/client";
import { robots } from "./robots.js";
import "./index.css";
import Hello from "./Hello.js";
import Card from "./Card.js";
import "tachyons";
import reportWebVitals from "./reportWebVitals";

// rendering home page -------------------------------------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Hello greeting={"Hello React Ninja!"} />
    <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
    <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
    <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
