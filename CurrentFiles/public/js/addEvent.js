$(document).ready(function() {
  // Getting references to our form and input
  var addEventForm = $("form.addEvent");
  var startInput = $("#start-input");
  var endInput = $("#end-input");
  var eventInput = $("#event-input");

  // When the signup button is clicked, we validate the email and password are not blank
  addEventForm.on("submit", function(event) {
    console.log("click")
    event.preventDefault();
    console.log(eventInput)
    var eventData = {
      start: startInput.val().trim(),
      end: endInput.val().trim(),
      event: eventInput.val().trim(),
    };

    if (!eventData.start || !eventData.end || !eventData.event) {
      return;
    }
    console.log("clicked")
    // If we have an email and password, run the signUpUser function
    addNewEvent(eventData.start, eventData.end, eventData.event);
    startInput.val("");
    endInput.val("");
    eventInput.val("")
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function addNewEvent(start, end, event) {
    console.log("triggered")
    $.post("/api/addEvent", {
      start: start,
      end: end,
      event:event
    })
      .then(function(data) {
        window.location.replace("/members");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleEventAddErr);
  }

  function handleEventAddErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
