import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";

import classnames from "classnames";

import TwitterAPI from "../../utils/TwitterAPI";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <div>
      <form noValidate onSubmit={this.onSubmit}>
      <label htmlFor="email">Email:</label>
      <span className="red-text">{errors.email}{errors.emailnotfound}</span>
      <input 
        onChange={this.onChange}
        value={this.state.email}
        errors={errors.email}
        id="email"
        type="email"
        className={classnames("", {
          invalid: errors.email || errors.emailnotfound})}/>
      <label htmlFor="password">Password:</label>
      <span className="red-text">{errors.password}{errors.passwordincorrect}</span>
      <input
        onChange={this.onChange}
        value={this.state.password}
        id="password"
        type="password"
        className={classnames("", {
          invalid: errors.password || errors.passwordincorrect })}/>
      <button type="submit">Submit</button>
    </form>
    </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
