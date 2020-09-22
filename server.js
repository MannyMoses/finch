
const express = require('express');
const connectDB = require('./db/connection');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

connectDB();

const PORT = process.env.Port || 3000;
app.listen(PORT, () => console.log("Connected to server on " + PORT));
//Bodyparser Middleware
app.use(bodyParser.json());

