// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
var fs = require('fs');
var path = require('path');
var mysql = require("mysql");
const {searchAmazon} = require('unofficial-amazon-search');

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/GetConnection", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {

      db.Event.findAll({where:
        {email:req.user.email}
      })
      .then(function(result) {
        fs.writeFile ("./public/input.json", JSON.stringify(result), function(err) {
          if (err) throw err})
        }
        )}
      }),

  app.get('/EventPull', function(req, res){
    res.sendFile(path.resolve("./public/input.json"));
  });

  app.post("/api/addEvent", function(req) {
    console.log(req.body);

    db.Event.create({
      email:req.user.email, 
      start: req.body.start1 + "-"+ req.body.start2 + "-" + req.body.start3,
      end: req.body.end1 + "-"+ req.body.end2 + "-" + req.body.end3, 
      text:req.body.event, 
      eventType:req.body.eventType, 
      interest:req.body.interest, 
      priceMin:req.body.priceMin, 
      priceMax:req.body.priceMax
  })

  .catch(function(err) {
    err.status(401).json(err);
  })
  .then(function (res) {console.log(res, "a")})
}),

  app.get('/api/gifts', function(req, res) {

    db.Event.findAll({where:
      {id:req.id}
    })

    searchAmazon(req.query.keywords).then(results => {
      res.json(results.splice(0,5));
      console.log("amazon results:", results[0].title, results[0].prices, results[0].productUrl,results[0].imageUrl);
    });
  
  })
};