// Require Dependencies 
const express = require('express');
const router = express.Router();
const connectDB = require('./db/connection');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const users = require('./routes/api/users');
const tweets = require('./routes/api/tweets');

// Initialize Express for app
const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

connectDB();

const PORT = process.env.Port || 5000;
app.listen(PORT, () => console.log("Connected to server on " + PORT));

// Bodyparser Middleware
app.use(
   bodyParser.urlencoded({
      extended: false
   })
);
app.use(bodyParser.json());


// Passport Middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

// Use Routes
   // Any request that goes to api/users/ refer to the routes/api/users folder
app.use('/api/users', users);
   // Any request that goes to api/tweets/ refer to the routes/api/tweets folder
app.use('/api/tweets', tweets);
