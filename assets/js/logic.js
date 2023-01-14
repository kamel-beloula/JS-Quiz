const startButton = document.getElementById('start');
const timer = document.getElementById('time');
const startScreen = document.getElementById('start-screen');
const questionsScreen = document.getElementById('questions');
const feedback = document.getElementById('feedback');
const endScreen = document.getElementById("end-screen");
const finalScore = document.getElementById("final-score");
const submitButton = document.getElementById("submit");

let currentQuiz = 0
let score = 0
let shuffledQuestions, currentQuestionIndex

var secondsLeft = 100;
function startTimer(){
    var timeInterval = setInterval(() => {
    secondsLeft--
    timer.textContent = secondsLeft;
    if (secondsLeft === 0){
        clearInterval(timeInterval);}
    }, 1000);
}

startButton.addEventListener('click', startQuiz);
function startQuiz(){
    startTimer();
    startScreen.classList.add('hide');
    questionsScreen.classList.remove('hide');
    feedback.classList.remove("hide");
    showQuestion();
    // shuffledQuestions = questions.sort(() => Math.random() - .5);
    // currentQuestionIndex = 0;
}

function endQuiz(){
    questionsScreen.classList.add("hide");
    endScreen.classList.remove("hide");
    clearInterval(timeInterval);
    score += secondsLeft; 
    finalScore += score;
}


submitButton.addEventListener("click", function(event) {
    log("submitButton.click event handler");
    var response = initials.value;
    if (response === "")
    {
        addScore("anonymous", score);
    }
    else {
        addScore(response, score);
    }
    // navigate to the highscore table
    window.location.replace("highscores.html");
});


function addScore(initials, score) {
    log("addScore(" + initials + "," + score + ")");

    const newScore = { initials, score };
    
    // Add new score to list
    highScores.push(newScore);

    // (Re)sort the list by score descending
    highScores.sort((a, b) => b.score - a.score);

    // Select new list from the top NO_OF_HIGH_SCORES (if there are two many entries lowest scores effectively drop off the bottom)
    highScores.splice(NO_OF_HIGH_SCORES);

    // Save to local storage
    localStorage.setItem(HIGH_SCORES, JSON.stringify(highScores));
}
