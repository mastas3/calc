import React from 'react';


class Button extends React.Component {
	constructor(props){
		super(props);
	}

	updateScreen(){
		this.props.updateScreen(this.props.name)
	}

	render(){
	let styling = {
	        padding: 0,
	        margin: 0,
	        width: 100,
	        height: 100,
	        backgroundColor: "#000",
	        color: 'white'
	      };		
		return <button style={styling} onClick={this.updateScreen.bind(this)}>{this.props.name}</button>
	}

}

export default Button;