//check off specific todos by Clicking

//If gray turn it to black
//When an li is clicked inside of our ul run our function call back
// clears a todo with a line through
$("ul").on("click","li",function(){
  $(this).toggleClass("completed");
});

// When a span is clicked inside of our ul run the function call back code
//Just remember this when a span is clicked inside of our selected ul we want our call back function run it's code
//removes a todo and it's html element
$("ul").on("click","span",function(event){
  //this refers to ul
  $(this).parent().fadeOut(500, function(){ //fadeOut refers to the parent
    $(this).remove(); // this refers to ul
  });
  event.stopPropagation(); //Stops event Bubbles
});


//Find the key press
$('input[type="text"]').on("keypress",function(event){
  if(event.which === 13) {
    //Grab new todo text from input
    var todoText = $(this).val(); // getter //grabs the keypressed character values
    $(this).val(""); // set it as a setter // sets the keypress character values

    //create a new li and add to ul
    // appends a string of HTML and add it to our selected element.
    //or in this case inside of our ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
  }
});
//toggles the input text box
$('.fa-plus-square').click(function(){
    $('input[type="text"]').fadeToggle(400);
});


//Get Name of the Month
function getMonth() {
  //creates a new Date Object we can reference to
  var getMonth = new Date();
  //Month Array collection
  var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  //GetUTCMonth Returns a number so depending on the number
  // i.e getUCMonth = 3 or march, our array month will see if the value of 3 is of the same value of index 3 in our array.
  var monthResult = month[getMonth.getUTCMonth()];
  return monthResult;
}

//Get The Number of the day
function getToday() {
  var getToday = new Date();
  var today = getToday.getUTCDate();

  return today;
}
//Get Current Year
function getYear() {
  var getY = new Date();
  var year = getY.getFullYear();
  return year;
}

//Get Name of the Day
function getDayName() {
  var getDay = new Date();
  //make an array of days
  var nameDays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

  var nameResult = nameDays[getDay.getUTCDate()];

  return nameResult;
}

function getSeconds() {
  //  var getY = new Date();
  // var year = getY.getFullYear();
  // return year;
 var getSec = new Date();
 // moment().format('MMMM Do YYYY, h:mm:ss a');
}

$(document).ready(function(){
  $("#wrapper").fadeIn(500);
  $("#Month").text(getMonth());
  $("#todayDate").text("   " + getToday() + ",");
  $("#year").text(getYear());
  $("#dayName").text(getDayName());
});

$(document).ready(function(){
  var body = document.querySelector("body");
  var url = "https://source.unsplash.com/category/nature";
  body.style.backgroundImage = "url("+ url +")";
  var updateTime = function() {
    var time = moment().format('LTS');
    $("#time").text(time);
  };
  // setInterval(function(){
  //
  // },);
  setInterval(function(){
    updateTime();
    // body.style.background=("src","https://source.unsplash.com/category/nature/daily");
  }, 500);

  updateTime();
});