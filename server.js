// Require Dependencies for package use in Server
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Initialize Express into app
let app = express();

// Initialize Body-Parser middleware
app.use(bodyParser.json());