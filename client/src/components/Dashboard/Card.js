import React, { Component } from 'react';

class Card extends Component {
    // declare repsonses as a variable
    // set state with repsonses
    constructor(props) {
        const { 
            tweet,
            date, 
            likes, 
            retweets, 
            replies, 
            name, 
            username, 
            pic, 
            following, 
            followers, 
            userTweet 
                } = props
        
                super(props)
        this.state = {
            tweet,
            date,
            likes,
            retweets,
            replies, 
            name, 
            username, 
            pic, 
            following, 
            followers, 
            userTweet 
        }
    }
    render() {
        return (
            <div className="card">
                <div className="tweet">
                    <h4 className="name">{this.props.name}</h4>
                    <h4 className="userName">@{this.props.username}</h4>
                    <img src={this.props.pic} alt=""></img>
                    <p className="following">{this.props.following}</p>
                    <p className="followers">{this.props.followers}</p>
                    <p className="userTweet">{this.props.userTweet}</p>
                    <p className="tweet">{this.props.tweet}</p>
                    <p className="date">{this.props.date}</p>
                    <p className="likes">Likes: {this.props.likes}</p>
                    <p className="retweets">Retweets: {this.props.retweets}</p>
                    <p className="replies">Replies: {this.props.replies}</p>
                </div>
                {
                    // Save Button will render with each tweet
                }
            </div>
        )
    }
}

export default Card;