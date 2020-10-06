import React, { Component } from 'react';
import Card from '../Dashboard/Card';

class List extends Component {
    render() {
        return (
            <div className="list">
                {this.props.tweets.map(el => {
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
                {this.props.users.map(le => {
                    return (
                        <div className="userCard">
                            <Card
                                name={le.name}
                                username={le.username}
                                pic={le.profile_image_url}
                                following={le.public_metrics.following_count}
                                followers={le.public_metrics.followers_count}
                                userTweet={le.public_metrics.tweet_count}
                            />
                        </div>
                    )
                })}
            </div>
        )
    }
};

export default List;