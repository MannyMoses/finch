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
                console.log(this.state.posts);
                
            })
            .catch(() => {
                console.log("Error with Database!");
            })
        }

           {this.state.posts.map((data, index) => {
                return <div key={index}>
                    <img alt ="" className="pic">{data.pic}</img>
                    <h2 className="name">{data.name}</h2>
                    <p className="username">{data.username}</p>
                    <p className="following">{data.following}</p>
                    <p className="followers">{data.followers}</p>
                    <p className="userTweet">{data.userTweet}</p>
                    <p className="tweet">{data.tweet}</p>
                    <p className="date">{data.date}</p>
                    <p className="likes">{data.likes}</p>
                    <p className="retweets">{data.retweets}</p>
                    <p className="replies">{data.replies}</p>
                </div>
            })};
        }
    }



export default SavedTweets;