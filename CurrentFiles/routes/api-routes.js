// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
var EP = require("../config/eventsPull.js");

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
  app.get("/eventsPull", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      //
      var mysql = require("mysql");

var connection = mysql.createConnection({
  //Local connection
    host: "d13xat1hwxt21t45.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "f1a6rrqcv2pdezj5",
    password: "pdtupwipjq3cywpx",
    database: "sfmi5qywezddma5t"
  });

if (process.env.JAWSDB_URL) {
connection = (process.env.JAWSDB_URL)}
else {
connection = connection
}

var data

var EP = {
  selectAll: function(UserID) {
    return new Promise((resolve, reject) => {
      var querystring = "SELECT * FROM eventData where email = '" + UserID +"'"
        connection.query(querystring, function(err, result) {
        if (err) {
          throw err
        }
        console.log(result)
        data=result
        //Pushed.push(result)
        //resolve(result)
      })
    }).then(console.log(data))
// ^End of promise
  }}
      //

      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      EP.selectAll(req.user.email)
      //  .then(
      //    function (Response) {console.log(data, "Line 84")}
      //  )
      };
  }
  )}
 