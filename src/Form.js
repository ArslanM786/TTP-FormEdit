import React, { Component } from "react";
import "./Form.css";
class Display extends Component {
    constructor() {
      super();
      this.state = {
        first: "Jon",
        last: "Doe",
        edit: false
      };
  
      this.baseState = this.state;
    }
    edit = () => {
        this.setState({ edit: true });
      };
    
      save = () => {
        this.baseState = this.state;
        this.setState({ edit: false });
      };
    
      cancel = () => {
        this.setState({ ...this.baseState, edit: false });
      };
    
      handleChange = event => {
        console.log("base", this.baseState);
        console.log("state", this.state);
    
        this.setState({
          [event.target.name]: event.target.value
        });
      };
    
      render() {
        let visible =
          this.state.edit === false ? (
            <div>
              <div className="firstname">First name: {this.state.first}</div>
              <div className="lastname">Last name: {this.state.last}</div>
              <button onClick={this.edit}>Edit</button>
            </div>
          ) : (
            <div>
              <input
                className="firstchange"
                type="text"
                name="first"
                onChange={this.handleChange}
                placeholder={this.state.first}
              />
              <input
                className="lastchange"
                type="text"
                name="last"
                placeholder={this.state.last}
                onChange={this.handleChange}
              />
              <button className="savebutton" onClick={this.save}>
                Save
              </button>
              <button className="cancelbutton" onClick={this.cancel}>
                Cancel
              </button>
            </div>
          );
    
        return <div className="style">{visible}</div>;
      }
    }
    
    export default Display;


















