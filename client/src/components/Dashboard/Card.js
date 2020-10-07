import React, { Component } from 'react';
import axios from 'axios';
import SaveButton from './SaveButton';

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

    handleClick = (event) => {
        event.preventDefault();
        const payload = {
            tweets: this.state.props
        };
        console.log(payload);

       // axios({
       //     url: '/api/tweets/saved',
       //     method: 'POST',
       //     data: payload
       // })
       // .then(() => {
       //     console.log("Data sent to server!");
       // })
       // .catch(() => {
       //     console.log('Server Error');
       // });
    }


    render() {
        return (
            <div className="card">
                <div className="tweet">
                    <img className="pic" src={this.props.pic} alt=""></img>
                    <h2 className="name">{this.props.name}</h2>
                    <h6 className="userName">@{this.props.username}</h6>
                    <p className="following">{this.props.following} Following</p>
                    <p className="followers">{this.props.followers} Followers</p>
                    <p className="userTweet">{this.props.userTweet} Tweets</p>
                    <p className="tweet">{this.props.tweet}</p>
                    <p className="date">{this.props.date}</p>
                    <p className="likes">{this.props.likes} Likes</p>
                    <p className="retweets">{this.props.retweets} Retweets</p>
                    <p className="replies">{this.props.replies} Replies</p>
                </div>
                
                  <SaveButton handleClick={this.handleClick} />
                
            </div>
        )
    }
}

export default Card;