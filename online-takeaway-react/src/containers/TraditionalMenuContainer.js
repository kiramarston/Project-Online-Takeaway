import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/request';
import TraditionalMenuList from '../components/traditionalmenu/TraditionalMenuList';


class TraditionalMenuContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      traditionalMenu: []
    }

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

  findTraditionalMenuById(id){
    return this.state.traditionalMenu.find((traditionalMenu) => {
      return traditionalMenu.id === parseInt(id);
    });
  }

  handleDelete(id){
    const request = new Request();
    const url = "/traditionalmenu/" + id
    request.delete(url)
    .then(() => window.location = "/traditionalmenu")
  }

  handlePost(traditionalMenu){
    const request = new Request();
    request.post("/api/traditionalmenu", traditionalMenu)
    .then(() => window.location = '/traditionalmenu')
  }

  handleUpdate(traditionalMenu){
    const request = new Request();
    request.patch('/api/traditionalmenu/' + traditionalMenu.id, traditionalMenu).then(() => {
      window.location = '/traditionalmenu/' + traditionalMenu.id
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
        return <TraditionalMenuList traditionalMenu={this.state.traditionalMenu}/>
      }} />

      </Switch>
      </Fragment>
      </Router>
    )
  }
}

export default TraditionalMenuContainer;
