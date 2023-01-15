const startButton = document.getElementById('start');
const timer = document.getElementById('time');
const startScreen = document.getElementById('start-screen');
const questionsScreen = document.getElementById('questions');
const endScreen = document.getElementById('end-screen');

const stats = document.getElementById('stats');

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
    stats.classList.add('hide');
    feedback.classList.add("hide");
    localStorage.setItem("recentScore", score);
    
}

