import React, { Component } from 'react';
import MainContainer from './containers/MainContainer';
import UserContainer from './containers/UserContainer';

class App extends Component {

  render() {
    return (
      <div>
      <MainContainer/>
      <UserContainer/>
      </div>
    )
  }
}

export default App;
