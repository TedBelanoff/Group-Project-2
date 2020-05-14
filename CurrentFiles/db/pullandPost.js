var eventsPull = require("../config/eventsPull.js");

var pullAndPost = {
  selectAll: function() {
    eventsPull.selectAll("event_data", function(res) {
     return(res)
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals,) {
    eventsPull.insertOne("event_data", cols, vals, function(res) {
      return(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = pullAndPost;