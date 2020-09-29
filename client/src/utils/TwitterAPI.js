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

    render() {
        return (
            <div className="twitterAPI">

            </div>
        )
    }
}

export default TwitterAPI;