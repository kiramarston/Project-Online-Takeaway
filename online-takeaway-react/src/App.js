import React, { Component } from 'react';
import MainContainer from './containers/MainContainer'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {show: false};

    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle(){
    const {show} = this.state;
    this.setState( {show: !show} )
  }

  render() {

    if (!this.state.show) {
      return (
        <p onClick={ this.handleToggle}>Traditional Menu</p>
      )
    }

    return (
      <div>
      <p onClick={ this.handleToggle}>Traditional Menu</p>
      <MainContainer/>
      </div>
    );
  }
}

export default App;
