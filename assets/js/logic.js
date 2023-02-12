const startButton = document.getElementById("start");
const timer = document.getElementById("time");
const startScreen = document.getElementById("start-screen");
const questionsScreen = document.getElementById("questions");
const endScreen = document.getElementById("end-screen");
const finalScore = document.getElementById("final-score");
const stats = document.getElementById("stats");
const highScoresList = document.getElementById("highscores");
const initialsInput = document.getElementById("initials");
const submitButton = document.getElementById("submit");
const clearButton = document.getElementById("clear");

let score = 0;
var secondsLeft = 60;
var timeInterval;

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



function renderLeaderbord(){
    for (let i = 0; i <= leaderboard.length; i++){
        const li = document.createElement("li");
        li.textContent = (leaderboard[i].player+ - +leaderboard[i].score)
        highScoresList.appendChild(li)
    }
}

function saveLeaderbord(){
    window.location.replace("highscores.html");
    var player = initialsInput.value;
    console.log(player);
    leaderboard.push({ player, score });
    console.log(leaderboard);
    localStorage.setItem("leaderbord", JSON.stringify(leaderboard));
  //   window.location.replace("highscores.html");
    
  
  };
  submitButton.addEventListener("click", saveLeaderbord)