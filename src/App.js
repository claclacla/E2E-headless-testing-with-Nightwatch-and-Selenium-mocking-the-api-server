import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import HomeContainer from './containers/Home/';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={HomeContainer}></Route>
      </Switch>
    );
  }
}

export default App;