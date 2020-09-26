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

// Initialize Express for app
const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

connectDB();

// Bodyparser Middleware
app.use(
   bodyParser.urlencoded({
      extended: false
   })
);

app.use(bodyParser.json());
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


// Define the PORT (Server)
const PORT = process.env.PORT || 5000;

// Make sure app is listening
app.listen(PORT, () => console.log("Connected to server on " + PORT));
