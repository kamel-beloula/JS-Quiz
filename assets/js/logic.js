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

//
startButton.addEventListener("click", startQuiz);
function startQuiz() {
  startTimer();
  startScreen.classList.add("hide");
  questionsScreen.classList.remove("hide");
  feedback.classList.remove("hide");
  showQuestion();
}

if (secondsLeft === 0) {
  endQuiz();
}

function endQuiz() {
  questionsScreen.classList.add("hide");
  endScreen.classList.remove("hide");
  clearInterval(timeInterval);
  score += secondsLeft;
  stats.classList.add("hide");
  feedback.classList.add("hide");
  finalScore.textContent = score;
}

function saveLeaderbord() {
  console.log("button clicked");
  const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
  var player = initialsInput.value;
  leaderboard.push({ player, score });
  leaderboard.sort((a, b) => b.score - a.score);
  console.log(leaderboard);
  localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
  window.location.replace("highscores.html");
}
submitButton.addEventListener("click", saveLeaderbord);
