// Require Mongoose for Schema
const mongoose = require('mongoose');

// Define Schema
const Schema = mongoose.Schema;

// Tweets Schema
const tweetSchema = new Schema(
    {
        pic: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        following_count: {
            type: Number,
            trim: true,
            required: true
        },
        followers_count: {
            type: Number,
            trim: true,
            required: true
        },
        tweet_count: {
            type: Number,
            trim: true,
            required: true
        },
        tweet_text: {
            type: String,
            required: true
        },
        Date: {
            type: Date,
            required: true
        },
        likes_count: {
            type: Number,
            trim: true,
            required: true
        },
        retweet_count: {
            type: Number,
            trim: true,
            required: true
        },
        reply_count: {
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