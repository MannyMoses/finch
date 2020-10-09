import React, { Component } from "react";
import TwitterAPI from "../../utils/TwitterAPI";
import SavedTweets from "../../components/Saved/SavedTweets";

class Login extends Component {
  render() {
    return(
      <div className="login">
        <SavedTweets />
      </div>
    )
  }
}
  
  export default Login;
