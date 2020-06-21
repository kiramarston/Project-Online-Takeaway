import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/request';
import UserForm from '../components/user/UserForm';

class UserContainer extends Component {

  handlePost(user) {
    const request = new Request();
    request.post("/users", user)
    .then(() => window.location = '/users')
  }

  render() {
    return (
      <Router>
      <Fragment>
      <Switch>

      <Route exact path = "/users/new" render = {(props) => {
        return <UserForm onCreate={this.handlePost}></UserForm>
      }}>
      </Route>

      </Switch>
      </Fragment>
      </Router>
    )
  }
}

export default UserContainer;
