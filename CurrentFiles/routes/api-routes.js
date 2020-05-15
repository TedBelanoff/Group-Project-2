// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
var fs = require('fs');
var path = require('path');

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

function PullEvents (UserID){
var querystring = "SELECT start, end, id, text FROM eventData where email = '" + UserID +"'"
  connection.query(querystring, function(err, result) {
  if (err) {throw err}
  fs.writeFile ("./public/input.json", JSON.stringify(result), function(err) {
    if (err) throw err;
    console.log('complete');
    });
  return result})}

PullEvents(req.user.email)

}})

app.get('/EventPull', function(req, res){
  res.sendFile(path.resolve("./public/input.json"));
})

app.post("/api/addEvent", function(req, res) {
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

function InsertEvent (user, start1, start2, start3, end1, end2, end3, event, eventType, interest, age){
var querystring = "insert into eventData values ('"+user+"','"+start1+"-"+start2+"-"+start3+"','"+end1+"-"+end2+"-"+end3+"',"+null+",'"+event+"','"+eventType+"','"+interest+"','"+age+"')"
  connection.query(querystring, function(err) {
  if (err) {throw err}
  })
}
console.log(req.user.email, req.body.start1, req.body.start2, req.body.start3, req.body.end1, req.body.end2,  req.body.end3, req.body.event)

InsertEvent(req.user.email, req.body.start1, req.body.start2, req.body.start3, req.body.end1, req.body.end2,  req.body.end3, req.body.event, req.body.eventType, req.body.interest, req.body.age)
})
}