// Require Dependencies 
const express = require('express');
const connectDB = require('./db/connection');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

// Initialize Express for app
const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

connectDB();


// Declare Port Location
const PORT = process.env.Port || 3000;

// Server Listening
app.listen(PORT, () => console.log("Connected to server on " + PORT));



