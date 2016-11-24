import React from 'react';
import Screen from './Screen.jsx';
import Button from './Button.jsx';


class Calculator extends React.Component {
	constructor(props){
		super(props);
			this.state = {
				display: 0,
				firstNum: 0,
				secondNum: 0,
				operator: 'none',
				sum: 'none',
				firstClick: true,
				secondClick: true
			}
	}
	
	concatNumbers(num1, num2){
		if(num1==0 && num2==0 ){
			return 0;
		}
		if(this.state.firstClick){
			this.setState({firstClick:false})
			return num2;
		}
		if(this.state.secondClick && this.state.operator!=='none'){
			this.setState({secondClick:false})
			return num2;
		}
		return '' + num1 + num2;
	}

	operation(){
		let result = 0;
		if(this.state.operator==='add'){
			result = Number(this.state.firstNum)+Number(this.state.secondNum);
		}

		if(this.state.operator==='substract'){
			result = Number(this.state.firstNum)-Number(this.state.secondNum);
		}

		if(this.state.operator==='divide'){
			result = Number(this.state.firstNum)/Number(this.state.secondNum);
		}

		if(this.state.operator==='multiply'){
			result = Number(this.state.firstNum)*Number(this.state.secondNum);
		}						

		this.setState({sum: result, display: result, firstNum:result, secondNum:0, operator: 'none', firstClick: true, secondClick: true})
	}

	updateScreen(val){
		if(val === '='){
			this.operation();
			return;
		}			
		if(val==='AC' || val==='CE'){
			this.setState({firstNum:0, secondNum:0, sum:'none', display:0, firstClick:true});
			return;
		}
		if(val==='+'){
			this.setState({operator:'add'})
			return;
		}
		if(val==='-'){
			if(this.state.operator !== 'none'){
				this.setState({secondNum: '-', display: '-', secondClick: false})
			} else {
				this.setState({operator:'substract'})
			}
			return;
		}
		if(val==='/'){
			this.setState({operator:'divide'})
			return;
		}
		if(val==='*'){
			this.setState({operator:'multiply'})
			return;
		}		
		if(this.state.operator === 'none'){
			let num = this.concatNumbers(this.state.firstNum, val)
			this.setState({display: num, firstNum: num})
			return;
		}
		if(this.state.operator !== 'none'){
			let num = this.concatNumbers(this.state.secondNum, val)
			this.setState({display: num, secondNum: num})
			return;
		}	
	}

	render(){
	let styling = {
	        padding: 0,
	        margin: 0,
	      };		
		return(
			<div style={styling}> 
				<Screen display={this.state.display} />

				<div>
					<Button updateScreen={this.updateScreen.bind(this)} name='AC'/>
					<Button updateScreen={this.updateScreen.bind(this)} name='CE'/>
					<Button updateScreen={this.updateScreen.bind(this)} name='/'/>
					<Button updateScreen={this.updateScreen.bind(this)} name='*'/>
				</div>

				<div>
					<Button updateScreen={this.updateScreen.bind(this)} name='7'/>
					<Button updateScreen={this.updateScreen.bind(this)} name='8'/>
					<Button updateScreen={this.updateScreen.bind(this)} name='9'/>
					<Button updateScreen={this.updateScreen.bind(this)} name='-'/>
				</div>

				<div>
					<Button updateScreen={this.updateScreen.bind(this)} name='4'/>
					<Button updateScreen={this.updateScreen.bind(this)} name='5'/>
					<Button updateScreen={this.updateScreen.bind(this)} name='6'/>
					<Button updateScreen={this.updateScreen.bind(this)} name='+'/>
				</div>

				<div>
					<Button updateScreen={this.updateScreen.bind(this)} name='1'/>
					<Button updateScreen={this.updateScreen.bind(this)} name='2'/>
					<Button updateScreen={this.updateScreen.bind(this)} name='3'/>
				</div>
				
				<div>
					<Button updateScreen={this.updateScreen.bind(this)} name='0'/>
					<Button updateScreen={this.updateScreen.bind(this)} name='='/>
					<Button updateScreen={this.updateScreen.bind(this)} name='.'/>
				</div>
			</div>
		)
	}	
}

export default Calculator;
