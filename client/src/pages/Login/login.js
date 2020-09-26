import React from 'react';
import  { Link } from 'react-router-dom';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        }
    };

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();


    const userData = {
        email: this.state.email,
        passwored: this.state.password
    };

    console.log('userData');
    };

    render() {
        const { errors } = this.state;

        return(
            <form noValidate onSubmit={this.onSubmit}>
                <label htmlFor="email">Email:</label>
                <input 
                    onChange={this.onChange}
                    value={this.state.email}
                    errors={errors.email}
                    id="email"
                    value="email"/>
                
                <label htmlFor="password">Password:</label>
                <input
                    onChange={this.onChange}
                    value={this.state.password}
                    id="password"
                    value="password"/>
                <button type="submit">Login</button>
            </form>
        )
    }
}
