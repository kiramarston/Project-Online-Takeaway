import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/request';
import TraditionalMenuList from '../components/traditionalmenu/TraditionalMenuList';


class TraditionalMenuContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      traditionalMenu: []
    };
  }

  componentDidMount(){
    const request = new Request();
    const traditionalMenuPromise = request.get('/traditionalmenu')

    Promise.all([traditionalMenuPromise])
    .then((data) => {
      this.setState({
        traditionalMenu: data[0]
      })
    })

  }

  render(){

    if(!this.state.traditionalMenu){
      return null;
    }

    return (
      <Router>
      <Fragment>
      <Switch>

      <Route render={(props) => {
        return <TraditionalMenuList traditionalMenu={this.state.traditionalMenu}
        addToShoppingCart={this.props.addToShoppingCart}/>
      }} />

      </Switch>
      </Fragment>
      </Router>
    )
  }
}

export default TraditionalMenuContainer;
