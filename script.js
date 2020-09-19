console.log(moment().format("h A"))




//show the day on top of calendar. Use moment.js grab the time, and set text of ptag w/ id currentDay to display the current day.

// var day = document.create('<p>');
var day = $('<p>');
    day.text(moment().format("dddd, MMMM Do, YYYY. h:mm A"));
    $('.jumbotron').append(day);

//Create an array that holds strings of all the hours from 9am to 5 pm. ["9 AM", "10 AM"...]

var timeArray = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM']



var currentHour = moment().format("H")
        // console.log(timeArray[timeIndex])
        // console.log(currentHour)

for(timeIndex = 0; timeIndex < timeArray.length; timeIndex++){
    var row = $('<div>')
        row.addClass("row time-block")
       
    var timeCol = $('<div>');
        timeCol.addClass("col-md-1 hour");
        timeCol.text(timeArray[timeIndex]);
        row.append(timeCol);
    var textCol =$('<textarea>');
        textCol.addClass(`col-md-10 ${timeIndex}`);
        textCol.attr('data-time', timeIndex+9);
        textCol.attr('id', timeIndex)
        row.append(textCol);
    var saveBtn = $('<button>');
        saveBtn.addClass(`col-md-1 saveBtn ${timeIndex}`);
        saveBtn.text("Save");
        row.append(saveBtn)


        


        $('.container').append(row);
}

//Saving inputs to text area.




$("textarea").each(function(){
    console.log($(this).attr('data-time'))
    if(parseInt($(this).attr('data-time')) > parseInt(currentHour)){
        console.log(currentHour)
        $(this).addClass("future")
    } else if(parseInt($(this).attr('data-time')) === parseInt(currentHour)){
        $(this).addClass("present")
    } else {
        $(this).addClass("past")
    }    

})




// $('.container').on("click", '.saveBtn', function(event){
//     var textput = $(this).siblings('textarea');    
//     localStorage.setItem("textarea", textInput())
// })


//click events to log text area into local storage.
$('.container').on('click', '.0', function() {
    var userText = $(this).siblings('textarea');
    localStorage.setItem('nine', userText.val())
})

$('.container').on('click', '.1', function() {
    var userText = $(this).siblings('textarea');
    localStorage.setItem('ten', userText.val())
})

$('.container').on('click', '.2', function() {
    var userText = $(this).siblings('textarea');
    localStorage.setItem('eleven', userText.val())
})

$('.container').on('click', '.3', function() {
    var userText = $(this).siblings('textarea');
    localStorage.setItem('twelve', userText.val())
})

$('.container').on('click', '.4', function() {
    var userText = $(this).siblings('textarea');
    localStorage.setItem('one', userText.val())
})

$('.container').on('click', '.5', function() {
    var userText = $(this).siblings('textarea');
    localStorage.setItem('two', userText.val())
})

$('.container').on('click', '.6', function() {
    var userText = $(this).siblings('textarea');
    localStorage.setItem('three', userText.val())
})

$('.container').on('click', '.7', function() {
    var userText = $(this).siblings('textarea');
    localStorage.setItem('four', userText.val())
})

$('.container').on('click', '.8', function() {
    var userText = $(this).siblings('textarea');
    localStorage.setItem('five', userText.val())
})

//Get item from local storage that has been saved by user.
var test = localStorage.getItem("nine");
$("#0").text(test);

var test = localStorage.getItem("ten");
$("#1").text(test);

var test = localStorage.getItem("eleven");
$("#2").text(test);

var test = localStorage.getItem("twelve");
$("#3").text(test);

var test = localStorage.getItem("one");
$("#4").text(test);

var test = localStorage.getItem("two");
$("#5").text(test);

var test = localStorage.getItem("three");
$("#6").text(test);

var test = localStorage.getItem("four");
$("#7").text(test);

var test = localStorage.getItem("five");
$("#8").text(test);


// localStorage.setItem("TestOne", "My first Note")
// localStorage.setItem("TestTwo", "My first Note")

//example of how to retrieve saved local storage and pull from a element class. In theis case the text area is class = 'first'.

// var test = localStorage.getItem("TestOne");
// $(".first").text(test)