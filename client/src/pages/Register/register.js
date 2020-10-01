import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'; 
import React, { Component } from 'react';
import { registerUser } from '../../actions/authActions';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './register.css';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        };
    }

    componentDidMount() {
        //If logged in, redirect to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    }

    componentWillRecieveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value});
    };

    onSubmit = e => {
        e.preventDefault();

    const newUser = {
        name: this.state.name,
        email: this.state.email,
        passport: this.state.password,
        password2: this.state.password2
    };
        console.log(newUser);
        this.props.registerUser(newUser, this.props.history);
    };   
    

    render() {
        const { errors } = this.state;

        return(
          <form noValidate onSubmit={this.onSubmit}>
        
            <label htmlFor="name">Name</label>
            <input 
                onChange={this.onChange}
                value={this.state.name}
                error={errors.name}
                id="name"
                type="text"
                className={classnames("", {
                    invalid: errors.name})}/>
              
            <label htmlFor="email">Email</label>
            <span className="red-text">{errors.name}</span>
            <input 
                onChange={this.onChange}
                value={this.state.email}
                error={errors.mail}
                id="email"
                type="email"/>

            <label htmlFor="password">Password</label>
            <input 
                onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
                id="email"
                type="password"/>


            <label htmlFor="password2">Confirm Password</label>  
            <input  
                onChange={this.onChange}
                value={this.state.password2}
                error={errors.password}
                id="password2"
                type="password"/>
                
            <button type="submit">Sign Up</button>
          </form>  
        );
    }
}

Register.propType = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})
    

export default connect(
    mapStateToProps,
    { registerUser} )(withRouter(Register));