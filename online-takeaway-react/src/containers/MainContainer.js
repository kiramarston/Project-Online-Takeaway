import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import TraditionalMenuContainer from './TraditionalMenuContainer';
import SideMenuContainer from './SideMenuContainer';
import DessertMenuContainer from './DessertMenuContainer';
import DrinkMenuContainer from './DrinkMenuContainer';
import Collapsible from 'react-collapsible';

const ShoppingCart = (props) => {

  if (props.cart.length === 0) {
    return (<p>Loading...</p>)
  }

  const handleDelete = (foodItem) => {
      window.mainContainer.deleteItem(foodItem);
    };

  const cart = props.cart.map((foodItem, index) => {
      //if the shopping cart has no items, let user know the cart is empty.

            if (foodItem.isSupper) {
              return (
              <li key={index} className="component-item">
              <div className="component">
              <button onClick={() => handleDelete(foodItem)}>x</button>
              <p>{foodItem.name} £{foodItem.supperPrice}</p>
              </div>
              </li>)

            } else {
              return (
              <li key={index} className="component-item">
              <div className="component">
              <button onClick={() => handleDelete(foodItem)}>x</button>
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
    window.mainContainer = this;
    this.state = {
      shoppingCartArray: []
    };
    this.addToShoppingCart = this.addToShoppingCart.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  addToShoppingCart(shoppingItem){
    // make a copy of the shoppingCartArray state,
    let copiedShoppingCart = this.state.shoppingCartArray.map((foodItem) => foodItem)
    // let copiedShoppingCart = [...shoppingCartArray]
    // add new item to the copied array,
    copiedShoppingCart.push(shoppingItem)
    // then save the copied array back to the array using setState
    this.setState({
      shoppingCartArray: copiedShoppingCart
    })
  }

  deleteItem(foodItem){
    let copiedShoppingCart = this.state.shoppingCartArray.filter(shoppingItem => shoppingItem.name !== foodItem.name)
    this.setState({
      shoppingCartArray: copiedShoppingCart
    })

    console.log(foodItem);
    // this.setState({shoppingCartArray: this.state.shoppingCartArray.filter(function(shoppingItem) {
    //     return shoppingItem !== unwantedShoppingItem.target.value
    // })});
  }

  render() {

      return(
      <Router>
      <Route exact path = "/menu" render = {(props) => {
        return (
          <div className="flex-container">
          <div className="flex-empty-left">
          </div>
          <div>

          <div>
          <Collapsible trigger="Traditional Menu">
          <TraditionalMenuContainer addToShoppingCart={this.addToShoppingCart}/>
          </Collapsible>
          <div className="chevron">
          </div>
          </div>


          <Collapsible trigger="Sides">
          <SideMenuContainer addToShoppingCart={this.addToShoppingCart}/>
          </Collapsible>

          <Collapsible trigger="Desserts">
          <DessertMenuContainer addToShoppingCart={this.addToShoppingCart}/>
          </Collapsible>

          <Collapsible trigger="Drinks">
          <DrinkMenuContainer addToShoppingCart={this.addToShoppingCart}/>
          </Collapsible>
          </div>

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
