import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header.js'; 
import {BrowserRouter, Switch, Route} from 'react-router-dom'; 
import Home from './Home.js'; 
import Movie from './Movie/movie.js'; 
import NewMovie from './NewMovie/newmovie.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch> 
          <Route path={"/movie/:id"} component={Movie} />
          <Route path={"/"} component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
