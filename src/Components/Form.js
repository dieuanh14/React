import React, { Component } from "react";

export default class extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      x: 0,
      y: 0,
    };
  }
  handleInput = (e) => {
    this.setState({ text: e.target.value });
  };
  handleMouse = (e) => {
    this.setState({ x: e.screenX, y: e.screenY });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleInput}
        />
      </div>
    );
  }
}
