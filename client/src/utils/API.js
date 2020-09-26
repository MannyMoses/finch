import React, { Component } from 'react';
import axios from 'axios'

class API extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            results : []
        }
    }
    
   async componentDidMount() {
        //ajax call
        try {
            const { data }  = await axios.get('/api/tweets')
            this.setState({
                results: data
            })
      

        }catch(error){
            console.log(error)
        }
    }
   
    render(){
        const tweets = this.state.results
        const mappedTweets = tweets.map(el => 
            <div>
                <h1>{el.name}</h1>
                <h1>{el.screen_name}</h1>
                <h1>{el.date}</h1>
                <h1>{el.profile_pic}</h1>
                <h1>{el.tweet_text}</h1>
                <h1>{el.reply_count}</h1>
                <h1>{el.retweet_count}</h1>
                <h1>{el.favorite_count}</h1>
                <h1>{el.follower_count}</h1>
                <h1>{el.following_count}</h1>
                <h1>{el.tweet_count}</h1>
            </div>
    )
        return (
        <div>
            {mappedTweets}
        </div>
        )
    }

}

export default API;