import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import './App.scss'

import Home from './Home'
import Questions from './Questions'
import Results from './Results'
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/questions" component={Questions} />
          <Route exact path="/results" component={Results} />
          <Route render={() => <div>404: Page not found!</div>} />
        </Switch>
      </Router>
    )
  }
}

export default App;
