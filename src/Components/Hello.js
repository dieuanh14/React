import React, { Component } from "react";

export default class Hello extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>Hello</div>
        <div>{this.props.msg}</div>
		<h2>{this.props.user.id}, {this.props.user.name}</h2>
      </div>
    );
  }
}
