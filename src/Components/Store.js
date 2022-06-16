import React, { Component } from 'react'

export default class Store extends Component {
	constructor(props){
		super(props);
		// this.state={
		// 	itemName:'rose',
		// 	number:1000,
		// };
		this.getItem=this.getItem.bind(this);
	}
	getItem(){
		// this.setState({number:this.state.number-1})
		this.props.onChangeNumber();
	}
  render() {
	return (
	  <div>
		  <h1>Item name: {this.state.itemName}</h1>
		  <h2>number of roses in stock:{this.state.number}</h2>
		  <button className='btn btn-danger' onClick={this.getItem}>Add to cart</button>
	  </div>
	);
  }
}
