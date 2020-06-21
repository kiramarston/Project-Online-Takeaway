import React, { Component } from 'react';
import MainContainer from './containers/MainContainer';
import TraditionalMenuContainer from './containers/TraditionalMenuContainer';
import SideMenuContainer from './containers/SideMenuContainer';
import DessertMenuContainer from './containers/DessertMenuContainer';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      traditionalMenuShow: false,
      sideMenuShow: false,
      dessertMenuShow: false
    };

    this.handleTraditionalMenuToggle = this.handleTraditionalMenuToggle.bind(this)
    this.handleSideMenuToggle = this.handleSideMenuToggle.bind(this)
    this.handleDessertMenuToggle = this.handleDessertMenuToggle.bind(this)
  }

  handleTraditionalMenuToggle(){
    this.setState({
      traditionalMenuShow: !this.state.traditionalMenuShow
    })
  }

  handleSideMenuToggle(){
    this.setState({
      sideMenuShow: !this.state.sideMenuShow
    })
  }

  handleDessertMenuToggle(){
    this.setState({
      dessertMenuShow: !this.state.dessertMenuShow
    })
  }

  render() {

    return (
      <div>
      {!this.state.traditionalMenuShow &&
        <p onClick={ this.handleTraditionalMenuToggle}>Traditional Menu</p>
      }

      {this.state.traditionalMenuShow &&
        <div>
        <p onClick={ this.handleTraditionalMenuToggle}>Traditional Menu</p>
        <TraditionalMenuContainer/>
        </div>
      }

      {!this.state.sideMenuShow &&
        <p onClick={ this.handleSideMenuToggle}>Sides</p>
      }

      {this.state.sideMenuShow &&
        <div>
        <p onClick={ this.handleSideMenuToggle}>Sides</p>
        <SideMenuContainer/>
        </div>
      }

      {!this.state.dessertMenuShow &&
        <p onClick={ this.handleDessertMenuToggle}>Desserts</p>
      }

      {this.state.dessertMenuShow &&
        <div>
        <p onClick={ this.handleDessertMenuToggle}>Desserts</p>
        <DessertMenuContainer/>
        </div>
      }

      </div>
    );
  }
}

export default App;
