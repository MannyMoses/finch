// Require Mongoose for Schema
const mongoose = require('mongoose');

// Define Schema
const Schema = mongoose.Schema;

// Tweets Schema
const tweetSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        screen_name: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        profile_pic: {
            type: String,
            required: true
        },
        tweet_text: {
            type: String,
            required: true
        },
        reply_count: {
            type: Number,
            trim: true,
            required: true
        },
        retweet_count: {
            type: Number,
            trim: true,
            required: true
        },
        favorite_count: {
            type: Number,
            trim: true,
            required: true
        },
        follower_count: {
            type: Number,
            trim: true,
            required: true
        },
        following_count: {
            type: Number,
            trim: true,
            required: true
        },
        tweet_count: {
            type: Number,
            trim: true,
            required: true
        }
    }
);

// Define Schema as "Tweet"
const Tweet = mongoose.model("Tweet", tweetSchema);

// Export the Schema
module.exports = Tweet;