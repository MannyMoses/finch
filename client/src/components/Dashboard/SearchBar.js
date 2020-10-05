import axios from 'axios';
import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="searchBar">
                <form onSubmit={this.props.handleSubmit} action="">
                    <input className="input" onChange={this.props.handleChange} type="text" />
                    <button className="searchBtn" type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default SearchBar;

