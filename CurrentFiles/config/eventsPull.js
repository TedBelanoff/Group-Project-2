// Connection
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

var EP = {
  Anything: function(UserID) {
    return new Promise((resolve, reject) => {
      var querystring = "SELECT * FROM eventData where email = '" + UserID +"'"
        connection.query(querystring, function(err, result) {
        if (err) {
          throw err
        }
        console.log(result)
        resolve(result)
      })
    })
  },
  
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("cats", cols, vals, function(res) {
      cb(res);
    });
  },
}
module.exports = EP