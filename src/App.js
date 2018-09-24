import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import Home from './Home'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route render={() => <div>404: Page not found!</div>} />
        </Switch>
      </Router>
    )
  }
}

export default App;
