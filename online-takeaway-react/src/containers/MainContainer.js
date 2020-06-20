import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TraditionalMenuContainer from './TraditionalMenuContainer';
import SideMenuContainer from './SideMenuContainer';

const MainContainer = () => {

    return (
      <Router>
      <Fragment>
      <Switch>
        <Route path="" component={TraditionalMenuContainer} />
      </Switch>


      </Fragment>
      </Router>
    )
}

export default MainContainer;
