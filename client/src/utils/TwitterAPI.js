import React, { Component } from 'react';
import axios from 'axios'

class TwitterAPI extends Component {
    constructor(props) {
        super(props)
        // Initial State
        this.state = {
            tweets : []
        }
    }

    // Twitter API Axios Call
    componentDidMount() {
        // Send get request to the server
        axios.get('/api/gettweets').then(res => {
                console.log(res)
                // Set Initial State
            this.setState({
                tweets: res.data.data
            })
        })
    }

    render() {
        // Map through Tweet and User Object to render Twitter metrics to the front-end
        return (
            <div className="twitterAPI">
                    {this.state.tweets.map(el => {
                        return (
                        <div>${el.text}</div>
                        )
                    })
                    }
            </div>
        )
    }
}

export default TwitterAPI;