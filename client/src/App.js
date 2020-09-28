import React, { Component } from 'react';
import { BrowswerRouter as Router, Route, Link, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import Register from './pages/Register/register';
import Login from './pages/Login/login';

import store from './store';

import API from '../src/utils/API';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component = {Login}/>
          <Route exact path="/register" component = {Register}/>
          <Route exact path="/dashboard" component = {API}/>
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
