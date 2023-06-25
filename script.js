// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.


var currentDayEl = document.querySelector("#currentDay");
var timeBlockEl = $(".time-block");
var saveBtnEl = $(".saveBtn");

// Wait for the DOM to be fully loaded
$(document).ready(function() {
  // Display the current day at the top of the calendar
  var currentDay = dayjs().format("dddd, MMMM D");
  $(currentDayEl).text(currentDay);

  // Get the current hour in 24-hour format
  var currentHour = dayjs().format("H");
 

  // Show time block (day, month date )
  timeBlockEl.each(function() {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);
    console.log("test");
    console.log(blockHour);
    console.log(currentHour);
    // Add or remove classes based on the current hour to indicate past, present, or future
    if (blockHour < currentHour) {
      $(this).removeClass("present future").addClass("past");
    } else if (blockHour == currentHour) {
      $(this).removeClass("past future").addClass("present");
    } else {
      $(this).removeClass("past present").addClass("future");
    }

    // Load saved events from local storage
    var savedEvent = localStorage.getItem("event-" + blockHour);
    if (savedEvent !== null) {
      $(this).find(".description").val(savedEvent);
    }
  });

  // Save button click event
  $(saveBtnEl).on("click", function() {
    var blockHour = parseInt($(this).parent().attr("id").split("-")[1]);
    console.log($(this).siblings(".description"));
    var eventText = $(this).siblings(".description").val();

    // Save the event in local storage
    localStorage.setItem("event-" + blockHour, eventText);
  });
});
