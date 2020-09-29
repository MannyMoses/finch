import React, { Component } from 'react';
import { BrowswerRouter as Router, Route, Link, Switch} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';

import { Provider } from 'react-redux';
import Register from './pages/Register/register';
import Login from './pages/Login/login';
import Dashboard from './pages/Dashboard/dashboard';
import store from './store';
import PrivateRoute from './components/private-route/PrivateRoute';
import API from '../src/utils/API';



//Check for token to keep user logged in
if (localStorage.jwtToken) {
  //Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  //Decode token and get user info and exp
  const decoded = jwt_decode(token);
  //Set user and isAuthenticatd
  store.dispatch(setCurrentUser(decoded));

  //Check for expired token
  const currentTime = Date.now() /1000;
  if (decoded.exp < currentTime) {
    //Logout user
    store.dispatch(logoutUser());

    //Redirect to login
    window.location.href="./";
  }
}

class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <Router>
          <Route exact path="/" component = {Login}/>
          <Route exact path="/register" component={Register}/>
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard}/>
          </Switch>
        </Router>
      </Provider>
    )
  }
}


export default App;
