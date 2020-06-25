//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;

var LeslieScore = 0;
var RonScore = 0;
var TomScore = 0;
var AprilScore = 0;

//This is a variable that will update the outcome of the quiz
var result = document.getElementById("result");

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

// variables for answer choice buttons for question 2
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

// variables for answer choice buttons for question 3
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

//#TODO: Add Event Listeners to your answer choice variables.

q1a1.addEventListener("click", Leslie);
q1a2.addEventListener("click", Ron);
q1a3.addEventListener("click", Tom);
q1a4.addEventListener("click", April);

q2a1.addEventListener("click", Tom);
q2a2.addEventListener("click", Leslie);
q2a3.addEventListener("click", April);
q2a4.addEventListener("click", Ron);

q3a1.addEventListener("click", April);
q3a2.addEventListener("click", Tom);
q3a3.addEventListener("click", Leslie);
q3a4.addEventListener("click", Ron);

//#TODO: Define quiz functions here
function Leslie() {
  LeslieScore += 1;
  questionCount += 1;
  if (questionCount > 2) {
    updateResult();
  
  }
}
function Ron() {
  RonScore += 1;
  questionCount += 1;
  if (questionCount > 2) {
    updateResult();
  }
}
function Tom() {
  TomScore += 1;
  questionCount += 1;
  if (questionCount > 2) {
    updateResult();
  }
}
function April() {
  AprilScore += 1;
  questionCount += 1;
  if (questionCount > 2) {
    updateResult();
  }
}

function updateResult() {
  if (LeslieScore > 1) {
    result.innerHTML =
      "You are Leslie Knope! You are an extrovert and put the needs of others above your own. You are an optimist and will stop at nothing to achive your goals.";
  } else if (RonScore > 1) {
    result.innerHTML =
      "You are Ron Swanson! You have strong opinions and are not known for waving them. You have a serious nature but once people get to know you they see you as a sensitive person.";
  } else if (TomScore > 1) {
    result.innerHTML =
      "You are Tom Haverford! You are quirky and talkative. You tend to put your own needs above the needs of others but you always show up in the end. You are bold and are not easily deterred.";
  } else if (AprilScore > 1) {
    result.innerHTML =
      "You are April Ludgate! You tend to have a dark outlook on things but are very passionate about the things that interest you. You are very confident and always say when something bothers you. You pride yourself on being unique and original.";
  } else {
    result.innerHTML = "You are Jerry! You are a klutz and tend to be the standing joke of your friends. You are creative and are kind to all.";
  }
}
