import '../assets/css/App.css';
import React, { Component } from 'react';
import Treshold from './Treshold/Treshold.js'

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Treshold></Treshold>
    );
  }
}

export default App;
