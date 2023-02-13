// DoM objects
const startButton = document.getElementById("start");
const timer = document.getElementById("time");
const startScreen = document.getElementById("start-screen");
const questionsScreen = document.getElementById("questions");
const endScreen = document.getElementById("end-screen");
const finalScore = document.getElementById("final-score");
const stats = document.getElementById("stats");
const initialsInput = document.getElementById("initials");
const submitButton = document.getElementById("submit");
const clearButton = document.getElementById("clear");

// variable 
let score = 0;
let secondsLeft = 60;
let timeInterval;

//timer function
function startTimer() {
  timeInterval = setInterval(() => {
    secondsLeft--;
    timer.textContent = secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timeInterval);
      endQuiz();
    }
  }, 1000);
}

//allocate an event listner to the start button
startButton.addEventListener("click", startQuiz);
function startQuiz() {
  startTimer();
  startScreen.classList.add("hide");//hide the start screen
  questionsScreen.classList.remove("hide");//show the questions screen 
  feedback.classList.remove("hide");//show the answer result
  showQuestion();//call the showquestion function
}

//the quiz ends when you run out of time
if (secondsLeft === 0) {
  endQuiz();
}

//adds the endquiz function
function endQuiz() {
  questionsScreen.classList.add("hide");//hide the questions screen
  endScreen.classList.remove("hide");//show the end screen
  clearInterval(timeInterval);
  score += secondsLeft;
  stats.classList.add("hide");
  feedback.classList.add("hide");
  finalScore.textContent = score;//display the score
}

//use local storage to save the score function
function saveLeaderbord() {
  const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || []; //retrieve the leaderboard array from localstorage
  var player = initialsInput.value; //save the player isitials in player variable
  leaderboard.push({ player, score });//add the player's initials and score the leaderboard array
  leaderboard.sort((a, b) => b.score - a.score);//order the leaderboard from high to low score
  localStorage.setItem("leaderboard", JSON.stringify(leaderboard));//save the array in the localstorage
  window.location.replace("highscores.html");//switch to the highscores html page
}
//allocate an event listener to the submit button
submitButton.addEventListener("click", saveLeaderbord);
