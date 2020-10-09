import React, { Component } from 'react';
import axios from 'axios';

class SavedTweets extends Component {
    constructor(props) {
        super(props) 
        this.statestate ={
            posts: {}
        };

        this.componentDidMount = () => {
            this.getTweets();
        };

        this.getTweets = () => {
            axios.get('/api')
            .then((response) => {
                const data = response.data;
                console.log("Data Received!");
                this.setState({ posts: data })
                console.log(data);
            })
            .catch(() => {
                console.log("Error with Database!");
            })
        }
    }
    render() {
        return (
            <div className="savedTweets">

            </div>
        )
    }
}

export default SavedTweets;