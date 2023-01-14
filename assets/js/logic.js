const startButton = document.getElementById('start');
const timer = document.getElementById('time');
const startScreen = document.getElementById('start-screen');
const questionsScreen = document.getElementById('questions');
const endScreen = document.getElementById('end-screen');
const finalScore = document.getElementById('final-score');
const stats = document.getElementById('stats');
const submitButton = document.getElementById('submit');
const initialsInput = document.getElementById('initials');

let score = 0;
var secondsLeft = 60;
var timeInterval;

function startTimer(){
    timeInterval = setInterval(() => {
    secondsLeft--
    timer.textContent = secondsLeft;
    if (secondsLeft === 0){
        clearInterval(timeInterval);
        endQuiz();
    }
    }, 1000);
}

startButton.addEventListener('click', startQuiz);
function startQuiz(){
    startTimer();
    startScreen.classList.add('hide');
    questionsScreen.classList.remove('hide');
    feedback.classList.remove("hide");
    showQuestion();
}

if (secondsLeft === 0){
    endQuiz();
}

function endQuiz(){
    questionsScreen.classList.add("hide");
    endScreen.classList.remove("hide");
    clearInterval(timeInterval);
    score += secondsLeft; 
    finalScore.textContent += score;
    stats.classList.add('hide');
}

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    var initials = initialsInput.value.trim()
    if (initials === "") {
        displayMessage("error", "initials cannot be blank");
    }
})

var initials = localStorage.getItem("initials");

counter.textContent = count;

addButton.addEventListener("click", function() {
  count++;
  counter.textContent = count;

  localStorage.setItem("count", count);
});