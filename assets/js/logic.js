var secondsLeft = 100;
const startButton = document.getElementById('start');
const timer = document.getElementById('time');




startButton.addEventListener('click', startQuiz);



function startQuiz(){
    startTimer();
}

function startTimer(){
    var timeInterval = setInterval(() => {
    secondsLeft--
    timer.textContent = secondsLeft;
    }, 1000);
}