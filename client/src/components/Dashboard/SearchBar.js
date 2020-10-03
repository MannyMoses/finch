import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div className="searchBar">
                <form> {
                    // pass in API Call & handleSearch Methods as props
                }
                    <input className="input" type="text" />
                    <button className="searchBtn" type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default SearchBar;