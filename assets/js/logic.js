var secondsLeft = 10;
const startButton = document.getElementById('start');
const timer = document.getElementById('time');
const startScreen = document.getElementById('start-screen');
const questionsScreen = document.getElementById('questions');



startButton.addEventListener('click', startQuiz);



function startQuiz(){
    startTimer();
    startScreen.classList.add('hide');
    questionsScreen.classList.remove('hide');
}

function startTimer(){
    var timeInterval = setInterval(() => {
    secondsLeft--
    timer.textContent = secondsLeft;
    if (secondsLeft === 0){
        clearInterval(timeInterval);}
    }, 1000);
}

function showQuestion(questions){
    questionElement.innerText = questions.question;
    questions.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click',selectAnswer)
        answerButtonsElement.appendChild(button);
    });
}