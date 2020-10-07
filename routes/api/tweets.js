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
router.post('/api/saved', (req, res) => {
    const newTweet = new Tweet({
        // Follow the Schema
        pic: req.body.pic,
        name: req.body.name,
        username: req.body.username,
        following_count: req.body.following_count,
        followers_count: req.body.followers_count,
        tweet_count: req.body.tweet_count,
        tweet_text: req.body.tweet_text,
        date: req.body.date,
        likes_count: req.body.likes_count,
        retweet_count: req.body.retweet_count,
        reply_count: req.body.reply_count
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

