import React, { Component } from "react";

export default class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "da",
      balance: "1000",
    };
	this.widthdraw=this.widthdraw.bind(this); //
  }
  widthdraw(){
	  this.setState({balance:900});
  }
  render() {
    return (
      <div>
        <h2>name:{this.state.name}</h2>
        <h2>balance: {this.state.balance}</h2>
		<button className="btn btn-info" onClick={this.widthdraw}>Click me</button>
      </div>
    );
  }
}
