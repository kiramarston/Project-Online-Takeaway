import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/request';
import DessertMenuList from '../components/dessertMenu/DessertMenuList';


class DessertMenuContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      dessertMenu: []
    }
  }

  componentDidMount(){
    const request = new Request();
    const dessertMenuPromise = request.get('/dessertmenu')

    Promise.all([dessertMenuPromise])
    .then((data) => {
      this.setState({
        dessertMenu: data[0]
      })
    })

  }

  render(){

    if(!this.state.dessertMenu){
      return null;
    }

    return (
      <Router>
      <Fragment>
      <Switch>

      <Route render={(props) => {
        return <DessertMenuList dessertMenu={this.state.dessertMenu}/>
      }} />

      </Switch>
      </Fragment>
      </Router>
    )
  }
}

export default DessertMenuContainer;
