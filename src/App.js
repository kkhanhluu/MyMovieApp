import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header.js'; 
import {BrowserRouter, Switch} from 'react-router-dom'; 
import Home from './Home.js'; 

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Home />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
