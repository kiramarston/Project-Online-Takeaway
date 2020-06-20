import React, { Component } from 'react';
import MainContainer from './containers/MainContainer'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      traditionalMenuShow: false,
      sideMenuShow: false
    };

    this.handleTraditionalMenuToggle = this.handleTraditionalMenuToggle.bind(this)
  }

  handleTraditionalMenuToggle(){
    this.setState({
      traditionalMenuShow: !this.state.traditionalMenuShow
    })
  }

  render() {

    if (!this.state.traditionalMenuShow) {
      return (
        <p onClick={ this.handleTraditionalMenuToggle}>Traditional Menu</p>
      )
    }

    return (
      <div>
      <p onClick={ this.handleTraditionalMenuToggle}>Traditional Menu</p>
      <MainContainer/>
      </div>
    );
  }
}

export default App;
