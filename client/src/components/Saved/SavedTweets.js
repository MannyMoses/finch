import axios from 'axios';
import React, { Component } from 'react';

class SavedTweets extends Component {
    // Initial State
    state = {
        posts: []
    };

    // Get Tweets Method
    componentDidMount = () => {
        this.getTweets();
    }

    getTweets = () => {
        axios.get('/saved')
        .then((response) => {
            const data = response.data;
            console.log('Data Received');
            this.setState({ posts: data });
        })
        .catch(() => {
            console.log('Error with Database');
        })
    }

    displayPosts = (posts) => {
        if (!posts.length) return null;

        posts.map((post) => {
            <div className="saved">
                <img>{post.pic}</img>
                <h2>{post.name}</h2>
                <h6>{post.username}</h6>
                <p>{post.following}</p>
                <p>{post.followers}</p>
                <p>{post.userTweet}</p>
                <p>{post.tweet}</p>
                <p>{post.date}</p>
                <p>{post.likes}</p>
                <p>{post.retweets}</p>
                <p>{post.replies}</p>
            </div>
        });

        
    }

    render() {
        return (
            <div className="savedTweets">
                {this.displayPosts(this.state.posts)}
            </div>
        )
    }
}

export default SavedTweets;