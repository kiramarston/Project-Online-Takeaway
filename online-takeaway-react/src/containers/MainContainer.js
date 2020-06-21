import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TraditionalMenuContainer from './TraditionalMenuContainer';
import SideMenuContainer from './SideMenuContainer';
import DessertMenuContainer from './DessertMenuContainer';
import DrinkMenuContainer from './DrinkMenuContainer';

const ShoppingCart = (props) => {
    //if the shopping cart has no items, let user know the cart is empty.
        return (
            <div className="EmptyCart">
                Nothing in Cart, please add something.
            </div>)
    }

class MainContainer extends Component{

  constructor(props) {
    super(props);
    this.state = {
      traditionalMenuShow: false,
      sideMenuShow: false,
      dessertMenuShow: false,
      drinkMenuShow: false,
      shoppingCartArray: []
    };

    this.handleTraditionalMenuToggle = this.handleTraditionalMenuToggle.bind(this)
    this.handleSideMenuToggle = this.handleSideMenuToggle.bind(this)
    this.handleDessertMenuToggle = this.handleDessertMenuToggle.bind(this)
    this.handleDrinkMenuToggle = this.handleDrinkMenuToggle.bind(this)
    this.addToShoppingCart = this.addToShoppingCart.bind(this)
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

  handleDrinkMenuToggle(){
    this.setState({
      drinkMenuShow: !this.state.drinkMenuShow
    })
  }

  addToShoppingCart(props){
    this.state.shoppingCartArray.add(props)
  }

  render() {

      return(
      <Router>
      <Route exact path = "/menu" render = {(props) => {
        return (
          <div className="flex-container">
            <div className="flex-empty-left">
            </div>
            <div className="flex-main-list">
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

              {!this.state.drinkMenuShow &&
                <p onClick={ this.handleDrinkMenuToggle}>Drinks</p>
              }

              {this.state.drinkMenuShow &&
                <div>
                <p onClick={ this.handleDrinkMenuToggle}>Drinks</p>
                <DrinkMenuContainer/>
                </div>
              }

              </div>
            </div>
            <div className="flex-order">
              <p style={{textAlign : 'center'}}>Your Order</p>
              <ShoppingCart/>
            </div>
          </div>
        )
      }}>
      </Route>
      </Router>
    )
  }
}

export default MainContainer;
