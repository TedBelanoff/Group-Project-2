//var emailAPI = "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"
// require('dotenv').config()

// require(['@sendgrid/mail'], function (sgMail) {
    //foo is now loaded.

// var emailAPI = "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"
// // var sgMail = require(["../node_modules/@sendgrid/mail/src/mail"]);
// var sgMail = require('[@sendgrid/mail]');
// console.log(sgMail);
// sgMail.setApiKey(emailAPI);
// var emailMessage = {
//     to: "rchen53@binghamton.edu",
//     from: "projectbootcampcolumbia@yahoo.com",
//     subject: "Sending with sendgrid is fun",
//     text: "it is easy",
//     html: "<strong> hello world </strong>",
// };

// sgMail.send(emailMessage);


$.ajax({
  url: "/EventPull",
  method: "GET",
  dataType: "json"
}).then(function(response) {

  var eventList = $("#event-list");

  var eventBtn = $("#email-btn");

  for (var i = 0; i < response.length; i++){
      
  function GetFormattedDate(start) {
      var todayTime = new Date(start);
      var month = todayTime.getMonth() + 1;
      var day = todayTime.getDate() + 1;
      var year = todayTime.getFullYear();
      return month + "/" + day + "/" + year;
  } 

  function GetFormattedDatePlus7 (start) {
      var date = new Date(start);
          date.setDate(date.getDate() + 7);
          var month = date.getMonth() + 1;
          var day = date.getDate() + 1;
          var year = date.getFullYear();
          return month + "/" + day + "/" + year;
  }

  var eventDate = GetFormattedDate(response[i].start);

  var emailDate = GetFormattedDatePlus7(response[i].start);


  // var eventNames = response[i].text + eventDate;
  //     console.log(response[i].text);

  var allEvents = document.createElement('li');
      allEvents.className = "list-group-item";
      allEvents.innerText = response[i].text + " " + eventDate;

  var emailBtn = document.createElement('button');
      emailBtn.className = 'btn btn-outline-secondary';
      emailBtn.innerText = 'Email Reminder';
      emailBtn.id = emailDate;
      emailBtn.addEventListener('click', (value)=>{
          console.log(value)

          alert('Email reminder will be sent'+ " " + value.target.id + "!");
      });
      
      eventList.append(allEvents, emailBtn);
      eventBtn.append(emailBtn);
  
    console.log(response);

  }

//     var emailBtn = document.createElement('button');
//     emailBtn.className = 'btn btn-outline-secondary';

//     emailBtn.innerText = 'Email Reminder';
  
//     emailBtn.addEventListener('click', ()=>{
//         alert('Email sent!');
//     });
  
//     eventList.append(eventNames);
//     eventBtn.append(emailBtn);

//   console.log(response);
});



// });
