import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/request';
import SideMenuList from '../components/traditionalmenu/SideMenuList';


class SideMenuContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      sideMenu: []
    }
  }

  componentDidMount(){
    const request = new Request();
    const traditionalMenuPromise = request.get('/sidemenu')

    Promise.all([sideMenuPromise])
    .then((data) => {
      this.setState({
        sideMenu: data[0]
      })
    })

  }

  render(){

    if(!this.state.sideMenu){
      return null;
    }

    return (
      <Router>
      <Fragment>
      <Switch>

      <Route render={(props) => {
        return <SideMenuList traditionalMenu={this.state.sideMenu}/>
      }} />

      </Switch>
      </Fragment>
      </Router>
    )
  }
}

export default SideMenuContainer;
