const startButton = document.getElementById('start');
const timer = document.getElementById('time');
const startScreen = document.getElementById('start-screen');
const questionsScreen = document.getElementById('questions');
const questionTitle = document.getElementById('question-title');
const questionChoices = document.getElementById('choices');
let currentQuiz = 0
let score = 0
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startQuiz);



function startQuiz(){
    startTimer();
    startScreen.classList.add('hide');
    questionsScreen.classList.remove('hide');
    showQuestion();
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
}

var secondsLeft = 100;
function startTimer(){
    var timeInterval = setInterval(() => {
    secondsLeft--
    timer.textContent = secondsLeft;
    if (secondsLeft === 0){
        clearInterval(timeInterval);}
    }, 1000);
}

function setNextQuestion(){
    showQuestion(shuffledQuestions[currentQuestionIndex])
} 

function showQuestion(question){
    questionTitle.innerText = question.question
    
}


const  questions = [
{
    question: "Commonly used data types DO Not Include",
    answers: [
        {text: "1. strings", correct: false },
        {text: "2. booleans", correct: true},
        {text: "3. alerts", correct: false},
        {text: "4. numbers", correct: false}
    ]
},

{
    question: "The condition in an if / else statement is enclosed with",
    answers: [
        {text: "1. quotes", correct: false },
        {text: "2. curly brackets", correct: false},
        {text: "3. parenthesis", correct: true},
        {text: "4. square brackets", correct: false}
    ]
},    

{
    question: "Arrays in JavaScript can be used to store?",
    answers: [
        {text: "1. number and strings", correct: false },
        {text: "2. other arrays", correct: false},
        {text: "3. booleans", correct: false},
        {text: "4. all of the above", correct: true}
    ]
},

{
    question: "String values must be enclosed within __________ when being assigned to variables.",
    answers: [
        {text: "1. commas", correct: false },
        {text: "2. curly brackets", correct: false},
        {text: "3. quotes", correct: true},
        {text: "4. parenthesis", correct: false}
    ]
},

{
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
        {text: "1. JavaScript", correct: false },
        {text: "2. terminal/bash", correct: false},
        {text: "3. for loops", correct: false},
        {text: "4. console.log", correct: true}
    ]
}
]

    