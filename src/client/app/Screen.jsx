import React from 'react';


class Screen extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
	let styling = {
	        padding: 10,
	        margin: 0,
	        width: 380,
	        height: 50,
	        backgroundColor: "#339933",
	        borderRadius: 5,
	        fontSize: 25,
	      };
	     
		return (
			<div style={styling}>{this.props.display}</div>
		)
	}
}

export default Screen;
