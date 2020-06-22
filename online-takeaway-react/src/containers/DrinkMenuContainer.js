import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/request';
import DrinkMenuList from '../components/drinkMenu/DrinkMenuList';


class DrinkMenuContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      drinkMenu: []
    }
  }

  componentDidMount(){
    const request = new Request();
    const drinkMenuPromise = request.get('/drinkmenu')

    Promise.all([drinkMenuPromise])
    .then((data) => {
      this.setState({
        drinkMenu: data[0]
      })
    })

  }

  render(){

    if(!this.state.drinkMenu){
      return null;
    }

    return (
      <Router>
      <Fragment>
      <Switch>

      <Route render={(props) => {
        return <DrinkMenuList drinkMenu={this.state.drinkMenu}
        addToShoppingCart={this.props.addToShoppingCart}/>
      }} />

      </Switch>
      </Fragment>
      </Router>
    )
  }
}

export default DrinkMenuContainer;
