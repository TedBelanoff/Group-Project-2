$(document).ready(function() {
  // Getting references to our form and input
  var addEventForm = $("form.addEvent");
  var startMonth = $("#start-input1");
  var startDay = $("#start-input2");
  var startYear = $("#start-input3");
  var endMonth = $("#end-input1");
  var endDay = $("#end-input2");
  var endYear = $("#end-input3");

  var eventInput = $("#event-input");
  var eventTypeInput = $("#eventType-input");
  var interestInput = $("#interest-input");
  var priceMin = $("#pricemin-input");
  var priceMax = $("#pricemax-input");
  
  function isPositiveInteger(x) {
    return Number.isInteger(x) && x > 0};


  // When the signup button is clicked, we validate the email and password are not blank
  addEventForm.on("submit", function(event) {

    
     var eventData = {
       start1: startYear.val(),
       start2: startMonth.val(),
       start3: startDay.val(),
       end1: endYear.val(),
       end2: endMonth.val(),
       end3: endDay.val(),
       event: eventInput.val().replace("'",""),
       eventType: eventTypeInput.val(),
       interest: interestInput.val(),
       priceMin: priceMin.val(),
       priceMax: priceMax.val()
     };
    if (!eventData.start1 || !eventData.start2 || !eventData.start3|| !eventData.end1 || !eventData.end2 || !eventData.end3 || !eventData.event) {
      return;
    }

    // If we have an email and password, run the signUpUser function
    addNewEvent(eventData.start1, eventData.start2,eventData.start3,eventData.end1, eventData.end2,eventData.end3, eventData.event, eventData.eventType, eventData.interest, eventData.priceMin, eventData.priceMax);
    startMonth.val("")
    startDay.val("")
    startYear.val("")
    endMonth.val("")
    endDay.val("")
    endYear.val("")
    eventInput.val("")
    eventTypeInput.val(""),
    interestInput.val(""),
    ageInput.val(""),
    priceMin.val(""),
    priceMax.val("")
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function addNewEvent(start1, start2, start3, end1, end2, end3, event, eventType, interest, priceMin, priceMax) {
    $.post("/api/addEvent", {
      start1: start1,
      start2: start2,
      start3: start3,
      end1: end1,
      end2: end2,
      end3: end3,
      event: event,
      eventType: eventType,
      interest: interest,
      priceMin: priceMin,
      priceMax: priceMax
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
