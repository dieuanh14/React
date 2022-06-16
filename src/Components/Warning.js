import React, { Component } from "react";

export default class Warning extends Component {
  constructor() {
    super();
    // this.display=this.display.bind(this);
  }
  // display(){
  // 	alert('Welcome');
  // }
  display = (msg) => {
    alert(msg);
  };
  render() {
    return (
      <div>
        <button className="btn btn-info" onClick={() => this.display("yeu co")}>
          Click me
        </button>
      </div>
    );
  }
}
