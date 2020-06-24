import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import TraditionalMenuContainer from './TraditionalMenuContainer';
import SideMenuContainer from './SideMenuContainer';
import DessertMenuContainer from './DessertMenuContainer';
import DrinkMenuContainer from './DrinkMenuContainer';
import UserContainer from './UserContainer';
import Collapsible from 'react-collapsible';
import UserLogin from '../components/user/UserLogin';

const ShoppingCart = (props) => {

  if (props.cart.length === 0) {
    return (<p style={{textAlign : 'center'}}>There are no items in your basket</p>)
  }

  const handleDelete = (foodItem, index) => {
      window.mainContainer.deleteItem(foodItem, index);
      window.mainContainer.calculateTotal();
    };

  const cart = props.cart.map((foodItem, index) => {
      //if the shopping cart has no items, let user know the cart is empty.
            if (foodItem.isSupper) {
              return (
              <li key={index} className="component-item">
              <div className="component">
              <button className="button-left" onClick={() => handleDelete(foodItem, index)}>x</button>
              <label className="delete-button-padding">{foodItem.name}</label>
              <label className="price-right">£{foodItem.price.toFixed(2)}</label>
              </div>
              </li>)

            } else {
              return (
              <li key={index} className="component-item">
              <div className="component">
              <button className="button-left" onClick={() => handleDelete(foodItem, index)}>x</button>
              <label className="delete-button-padding">{foodItem.name}</label>
              <label className="price-right">£{foodItem.price.toFixed(2)}</label>
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
      shoppingCartArray: [],
      shoppingCartTotal: 0,
      isLoggedIn: false
    };
    this.addToShoppingCart = this.addToShoppingCart.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.loginHandler = this.loginHandler.bind(this)
    this.calculateTotal = this.calculateTotal.bind(this)
  }

  addToShoppingCart(shoppingItem){
    // make a copy of the shoppingCartArray state,
    let copiedShoppingCart = this.state.shoppingCartArray.map((foodItem) => foodItem)
    // let copiedShoppingCart = [...shoppingCartArray]
    // add new item to the copied array,
    copiedShoppingCart.push(shoppingItem)
    console.log(shoppingItem);
    // then save the copied array back to the array using setState
    this.setState({
      shoppingCartArray: copiedShoppingCart
    }, function() {
      this.calculateTotal()
    })
  }

  deleteItem(foodItem, index){
    let copiedShoppingCart = this.state.shoppingCartArray
    let removedElement = copiedShoppingCart.splice(index, 1)
    this.setState({
      shoppingCartArray: copiedShoppingCart
    })
  }

  loginHandler(){
    this.setState({
      isLoggedIn: true
    })
  }

  calculateTotal(){
    const total = this.state.shoppingCartArray.reduce((runningTotal, foodItem) => runningTotal + foodItem.price, 0).toFixed(2)
    this.setState({
      shoppingCartTotal: total
    })
  }

  render() {

      return(
      <Router>
      <Route exact path = "/menu" render = {(props) => {

        if (!this.state.isLoggedIn) {
          return (
            <UserLogin loginHandler={this.loginHandler}/>
          )
        }

        return (
          <div className="flex-container">
          <div className="flex-empty-left">
          </div>
          <div>

          <div className="bar-spacing">
          <Collapsible className="food-bar" trigger="Traditional Menu">
          <TraditionalMenuContainer addToShoppingCart={this.addToShoppingCart}/>
          </Collapsible>
          </div>

          <div className="bar-spacing">
          <Collapsible className="food-bar" trigger="Sides">
          <SideMenuContainer addToShoppingCart={this.addToShoppingCart}/>
          </Collapsible>
          </div>

          <div className="bar-spacing">
          <Collapsible className="food-bar" trigger="Desserts">
          <DessertMenuContainer addToShoppingCart={this.addToShoppingCart}/>
          </Collapsible>
          </div>

          <div className="bar-spacing">
          <Collapsible className="food-bar" trigger="Drinks">
          <DrinkMenuContainer addToShoppingCart={this.addToShoppingCart}/>
          </Collapsible>
          </div>

          </div>


          <div className="flex-order">
          <div>
            <p className="order-bar" style={{textAlign : 'center'}}>Your Order</p>
            <hr/>
            <ShoppingCart cart={this.state.shoppingCartArray}/>
            {this.state.shoppingCartArray.length > 0 &&
            <hr/>
            }
            {this.state.shoppingCartArray.length > 0 &&
            <label className="total-order-text">Total: </label>
            }
            {this.state.shoppingCartArray.length > 0 &&
            <label className="total-amount">£{this.state.shoppingCartTotal}</label>
            }
          </div>
          <div className="checkout-div">
          {this.state.shoppingCartArray.length > 0 &&
          <button className="checkout-button">Checkout</button>
          }
          </div>
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
