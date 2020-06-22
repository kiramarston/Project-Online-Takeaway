import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TraditionalMenuContainer from './TraditionalMenuContainer';
import SideMenuContainer from './SideMenuContainer';
import DessertMenuContainer from './DessertMenuContainer';
import DrinkMenuContainer from './DrinkMenuContainer';
import Collapsible from 'react-collapsible';

const ShoppingCart = (props) => {

  if (props.cart.length === 0) {
    return (<p>Loading...</p>)
  }

  const cart = props.cart.map((foodItem, index) => {
      //if the shopping cart has no items, let user know the cart is empty.

            if (foodItem.isSupper) {
              return (
              <li key={index} className="component-item">
              <div className="component">
              <p>{foodItem.name} £{foodItem.supperPrice}</p>
              </div>
              </li>)

            } else {
              return (
              <li key={index} className="component-item">
              <div className="component">
              <p>{foodItem.name} £{foodItem.price}</p>
              </div>
              </li>)
    }
  })
  return cart;
};

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

  addToShoppingCart(shoppingItem){
    // make a copy of the shoppingCartArray state,
    let copiedShoppingCart = this.state.shoppingCartArray.map((foodItem) => foodItem)
    // let copiedShoppingCart = [...shoppingCartArray]
    // add new item to the copied array,
    console.log(copiedShoppingCart)
    copiedShoppingCart.push(shoppingItem)
    // then save the copied array back to the array using setState
    this.setState({
      shoppingCartArray: copiedShoppingCart
    })
  }

  render() {

      return(
      <Router>
      <Route exact path = "/menu" render = {(props) => {
        return (
          <div className="flex-container">

          <Collapsible trigger="Traditional Menu">
          <TraditionalMenuContainer addToShoppingCart={this.addToShoppingCart}/>
          </Collapsible>

          <Collapsible trigger="Sides">
          <SideMenuContainer addToShoppingCart={this.addToShoppingCart}/>
          </Collapsible>

          <Collapsible trigger="Desserts">
          <DessertMenuContainer addToShoppingCart={this.addToShoppingCart}/>
          </Collapsible>

          <Collapsible trigger="Drinks">
          <DrinkMenuContainer addToShoppingCart={this.addToShoppingCart}/>
          </Collapsible>
          
            <div className="flex-order">
              <p className="food-bar" style={{textAlign : 'center'}}>Your Order</p>
              <ShoppingCart cart={this.state.shoppingCartArray}/>
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
