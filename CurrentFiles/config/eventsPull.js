// add mysql require
var mysql = require("mysql");

// Connection
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
// else {
// connection = connection;
// }


//Data treatment functions (used in Unit 13 Activity 17)
function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

// function objToSql(ob) {
//   var arr = [];

//   for (var key in ob) {
//     var value = ob[key];
//     if (Object.hasOwnProperty.call(ob, key)) {
//       if (typeof value === "string" && value.indexOf(" ") >= 0) {
//         value = "'" + value + "'";
//       }
//       arr.push(key + "=" + value);
//     }
//   }
//   return arr.toString();
// }

var eventsPull = {
  // selectAll: function(userID, result) {
    selectAll: function(userID) {
    var queryString = "SELECT * FROM event_data where userID =" + userID + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      console.log(result)
      return (result);
    });
  },
//Insert function
  // insertOne: function(table, cols, vals, bb) {

  insertOne: function(table, cols, vals) {

    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    return queryString;
  }

}
// Export ORM
module.exports = eventsPull;