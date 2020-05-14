var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var cat = require("../db/pullandPost.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  pullAndPost.selectAll(function(data) {
    var hbsObject = {
      pullAndPost: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/cats", function(req, res) {
  cat.create([
    "name", "sleepy"
  ], [
    req.body.name, req.body.sleepy
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});