import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import Calculator from './Calculator.jsx';

class App extends React.Component {
  render () {
    // return <p> Hello!</p>;
    return <Calculator/>
  }
}

render(<App/>, document.getElementById('app'));