import React, { Component } from "react";
import "./Folder.css";

class Folder extends Component {
  constructor() {
    super();

    this.state = {
      toggle: false,
    };

    console.log("in constructor");
  }

  
  

  toggleClick = () => {
    this.state.toggle
      ? this.setState({ toggle: false })
      : this.setState({ toggle: true });
  };

  render() {
    console.log("in render");
    let visible = this.state.toggle ? null : (
      <div>
        <ul>
          <li>File1</li>
          <li>File2</li>
          <li>File3</li>
        </ul>
      </div>
    );
    return (
      <div className="style">
        <h1> Home </h1>
        {visible}
        <button onClick={this.toggleClick}>Toggle</button>
      </div>
    );
  
}
}

export default Folder;
