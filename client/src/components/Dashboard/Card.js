import React, { Component } from 'react';

class Card extends Component {
    // declare repsonses as a variable
    // set state with repsonses
    constructor(props) {
        const { tweet, date, likes, retweets, replies } = props
        super(props)
        this.state = {
            tweet,
            date,
            likes,
            retweets,
            replies
        }
    }
    render() {
        return (
            <div className="card">
                <div className="tweet">
                    <h4 className="tweet">{this.props.tweet}</h4>
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