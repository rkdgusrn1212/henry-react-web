import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import Home from './page/Home';
import WrongURL from './page/WrongURL';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route component={WrongURL}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
