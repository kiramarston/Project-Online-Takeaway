import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/request';
import PaymentForm from '../components/payment/PaymentForm';


class PaymentContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      drinkMenu: []
    }
  }

  render(){

    return (
      <Router>
      <Fragment>
      <Switch>

      <Route render={(props) => {
        return <PaymentForm/>
      }} />

      </Switch>
      </Fragment>
      </Router>
    )
  }
}

export default PaymentContainer;
