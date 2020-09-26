import React, { Component } from 'react';
import { BrowswerRouter as Router, route} from 'react-router-dom';
import { Provider } from 'react-redux';
import Register from './pages/Register/register';
import Login from './pages/Login/login';

import store from './store';

import API from '../src/utils/API';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Route exact path="/" component = {Login}/>
          <Route exact path="/register" component = {Register}/>
          <Route exact path="/dashboard" component = {API}/>
        </Router>
      </Provider>


    </div>
  );
}

export default App;
