// Require Dependencies 
const express = require('express');
const router = express.Router();
const connectDB = require('./db/connection');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const cors = require("cors");
const users = require('./routes/api/users');
const tweets = require('./routes/api/tweets');
const axios = require('axios');

// Initialize Express for app
const app = express();

connectDB();

// Bodyparser Middleware
app.use(
   bodyParser.urlencoded({
      extended: true
   })
);

app.use(cors())

// Passport Middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

// Use Routes
   // Any request that goes to api/users/ refer to the routes/api/users folder
app.use('/api/users', users);
   // Any request that goes to api/tweets/ refer to the routes/api/tweets folder
app.use('/api/tweets', tweets);

// When api/gettweets/ is requested, call Twitter API and send to the client
app.get('/api/gettweets', function(req, res) {
   axios.get('https://api.twitter.com/2/tweets/search/recent?query=tax&tweet.fields=created_at,public_metrics&user.fields=profile_image_url,public_metrics,verified&expansions=author_id&max_results=20', {
               headers: {
                   'Authorization': `Bearer AAAAAAAAAAAAAAAAAAAAAIUgGQEAAAAAUqgsDq853ETcqw1VSR%2BKktyvugA%3DU5rjpWyYLCrAeu3eXYSK2n4mLSFIQSrLd7gQYqdOspmvW3uFmD`
               }
           })
           .then(response => {
     
               res.send(response.data)
           })
           .catch((error) => {
               console.error(error)
           })
  });


// Define the PORT (Server)
const PORT = process.env.PORT || 5000;

// Make sure app is listening
app.listen(PORT, () => console.log("Connected to server on " + PORT));
