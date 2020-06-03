import React, { Component } from "react";
import Form from "./Form"
import Folder from "./Folder";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <Folder />
      </div>
    );
  }
}

export default App;

