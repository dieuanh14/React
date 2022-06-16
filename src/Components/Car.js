import React, { Component } from "react";

export default class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964,
    };
  }
  changeColor = () => {
    this.setState({ color: "blue" });
  };
  start = (e) => {
    alert("Your car is ready by " + e.type);
  };
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}
        </p>
        <button
          className="btn btn-info"
          type="button"
          onClick={this.changeColor}
        >
          Change Color
        </button>
        <button className="btn btn-danger"onClick={this.start}>Start</button>
      </div>
    );
  }
}
