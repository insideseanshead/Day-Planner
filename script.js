console.log(moment().format("h A"))

//TODO: Create one row w/ time text area and button using jquery.
//layout of what we need to make with JQ

{/* <div class="row time-block">
        <div class="col-md-1 hour">
          9am
        </div>
        <textarea class="col-md-10">

        </textarea>
        <button class="col-md-1 saveBtn">
          save
        </button>
 </div> */}

//show the day on top of calendar. Use moment.js grab the time, and set text of ptag w/ id currentDay to display the current day.

// var day = document.create('<p>');
var day = $('<p>');
    day.text(moment().format("d MMMM Mo"));
    $('.jumbotron').append(day);
// moment().format("d MMMM Mo");
// document.querySelector('.jumbotron').appendChild(day)

//Create an array that holds strings of all the hours from 9am to 5 pm. ["9 AM", "10 AM"...]

var timeArray = ['9 AM', '10 AM', '11 AM', '12 PM', '1 BM', '2 PM', '3PM', '4 PM', '5 PM']

//TODO: make a row with time, text field and save button


//TODO: loop that creates a row for each hour from 9am to 5 pm using above array. create div for row, create div, textarea, and a button.

for(timeIndex = 0; timeIndex < timeArray.length; timeIndex++){
    var row = $('<div>')
        row.addClass("row time-block")
        $('.container').append(row);
    var timeCol = $('<div>');
        timeCol.addClass("col-md-1 hour");
        timeCol.text(timeArray[timeIndex]);
        row.append(timeCol);
    var textCol =$('<textarea>');
        textCol.addClass('col-md-10');
        row.append(textCol);
    var saveBtn = $('<button>');
        saveBtn.addClass("col-md-1 saveBtn");
        saveBtn.text("Save");
        row.append(saveBtn)

    if(timeArray[timeIndex] > moment().format("h A")){
        row.addClass("future")
    } else if(timeArray[timeIndex] === moment().format("h A")){
        row.addClass("present")
    } else {
        row.addClass("past")
    }
}


// How can I check the hour of rows to current time? (moment.js and get the current time and compare it to time assigned to row)

//TODO:  give elements content and classes that they need e.g using an if statement we can check using moment.js to see if the time is past, give the text are class of past. Then append to page.

//TODO: create click event listener for buttons.

//TODO: Grab the value of the text area and save it to a variable. (I need to be able to save the text area from the text area from the same row as button) 

//TODO: Using localStorage.setItem save the text to local storage.

//TODO: Retrieve the data from local storage using localStorage.getItem and show it to user. (How can I know what text from local storage goes to what text area?)

// localStorage.setItem("TestOne", "My first Note")
// localStorage.setItem("TestTwo", "My first Note")

//example of how to retrieve saved local storage and pull from a element class. In theis case the text area is class = 'first'.

// var test = localStorage.getItem("TestOne");
// $(".first").text(test)