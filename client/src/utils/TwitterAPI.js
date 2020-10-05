import React, { Component } from 'react';
import axios from 'axios'
import SearchBar from '../components/Dashboard/SearchBar';
import List from '../components/Dashboard/List';

class TwitterAPI extends Component {
    constructor(props) {
        super(props)
        // Initial State
        this.state = {
            twitterResponse: {},
            searchVal: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // Search Method
    
    handleChange(event){
        this.setState({searchVal: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state.searchVal);
        axios.get(`/api/gettweets?searchVal=${this.state.searchVal}`).then(res => {
            console.log(res)
            // Set Initial State
        this.setState({

            twitterResponse: res.data
        })

        console.log('=========> twitRes', this.state.twitterResponse);
    })
    }



    render() {
        // Map through Tweet and User Object to render Twitter metrics to the front-end
        return (
            <div className="twitterAPI">
            <SearchBar handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
           
            <List tweets={this.twitterResponse} />
           
            </div>
        )
    }
}

export default TwitterAPI;