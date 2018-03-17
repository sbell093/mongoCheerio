const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const cheerio = ("cheerio");
const request = require("request");

const PORT = 3000;

// Require all models
const db = require("./models");

// Initialize Express
const app = express();

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Configure Middleware

//Logs requests
app.use(logger("dev"));
// Uses body-parser for handeling submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Uses express.static to serve the public folder as a static directory
app.use(express.static("public"));

// By default mongoose uses callbacks for asynchronous queries, we're setting it to use promises (.then syntax) instead
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongo-scraper";
// Connect to the Mongo db
mongoose.Promise = Promise;
mongoose.connect("MONGODB_URI", {
    useMongoClient: true
});

db.User.create({name: })