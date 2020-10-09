import React, { Component } from 'react';
import axios from 'axios';

class SavedTweets extends Component {
    constructor(props) {
        super(props) 
        this.state ={
            posts: {}
        };

        this.componentDidMount = () => {
            this.getTweets();
        };

        this.getTweets = () => {
            axios.get('/api/tweets')
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

        this.displayPosts = (posts) => {
            if (!posts.length) return null;

            posts.map((posts, index) => {
                <div key={index}>
                    <img className="pic">{posts.profile_image_url}</img>
                    <h2 className="name">{posts.name}</h2>
                    <p className="username">{posts.username}</p>
                    <p className="following">{posts.public_metrics.following}</p>
                    <p className="followers">{posts.public_metrics.followers}</p>
                    <p className="userTweet">{posts.public_metrics.tweet_count}</p>
                    <p className="tweet">{posts.text}</p>
                    <p className="date">{posts.created_at}</p>
                    <p className="likes">{posts.tweet_metrics.likes}</p>
                    <p className="retweets">{posts.tweet_metrics.retweets}</p>
                    <p className="replies">{posts.tweet_metrics.replies}</p>
                </div>
            });
        }
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