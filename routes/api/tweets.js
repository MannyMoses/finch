// Require Dependencies
const express = require('express');
const router = express.Router();
// Bring in Tweet Model so the Route methods can reference
const Tweet = require('../../models/Tweet');

// Routes
    
    // GET Route
    // Tested with POSTMAN
router.get('/', (req, res) => {
    console.log('ROUTE HAS BEEN HIT')
    // Fetch all items from the DB
    Tweet.find().sort({date: -1})
    .then(tweets => res.json(tweets))
});

    // POST Route
    // Tested With POSTMAN
router.post('/', (req, res) => {
    const newTweet = new Tweet({
        // Follow the Schema
        name: req.body.name,
        screen_name: req.body.screen_name,
        date: req.body.date,
        profile_pic: req.body.profile_pic,
        tweet_text: req.body.tweet_text,
        reply_count: req.body.reply_count,
        retweet_count: req.body.retweet_count,
        favorite_count: req.body.favorite_count,
        follower_count: req.body.follower_count,
        following_count: req.body.following_count,
        tweet_count: req.body.tweet_count
    });
    newTweet.save()
    .then(tweet => res.json(tweet));
});

    // DELETE Route
    // NEED TO TEST WITH POSTMAN
router.delete('/:id', (req, res) => {
    Tweet.findById(req.params.id).then(tweet => tweet.remove()
    .then(() => res.json({success: true })))
    .catch(err => res.status(404).json({success: false}))
});

module.exports = router;

