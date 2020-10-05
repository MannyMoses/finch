import React, { Component } from 'react';
import Card from '../Dashboard/Card';

class List extends Component {
    render() {
        return (
            <div className="list">
                {this.twitterResponse.map(el => {
                    return (
                        <div className="tweetCard">
                        <Card
                            tweet={el.text}
                            date={el.created_at}
                            likes={el.public_metrics.like_count}
                            retweets={el.public_metrics.retweet_count}
                            replies={el.public_metrics.reply_count}
                        />
                        </div>
                    )
                    
                })}
            </div>
        )
    }
};

export default List;