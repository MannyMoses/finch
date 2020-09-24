const express = require('express');
const router = express.Router();
const connectDB = require('./db/connection');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const users = require('./routes/api/users');
const app = express();

//Connect DB
connectDB();

//Connect Server
const PORT = process.env.Port || 5000;
app.listen(PORT, () => console.log("Connected to server on " + PORT));

//Bodyparser Middleware
app.use(
   bodyParser.urlencoded({
      extended: true
   })
);

app.use(bodyParser.json({limit: '10mb'}));


// app.use(express.json({extended: false}));

//Passport Middleware
app.use(passport.initialize());

//Passport config
require('./config/passport')(passport);

//Routes
app.use('/api/users', users);
