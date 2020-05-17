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

    var eventDate = GetFormattedDate(response[i].start);


    // var eventNames = response[i].text + eventDate;
    //     console.log(response[i].text);

    var allEvents = document.createElement('li');
        allEvents.className = "list-group-item";
        allEvents.innerText = response[i].text + " " + eventDate;

    var emailBtn = document.createElement('button');
        emailBtn.className = 'btn btn-outline-secondary';
        emailBtn.innerText = 'Email Reminder';
        
        emailBtn.addEventListener('click', ()=>{
            alert('Email sent!');
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





