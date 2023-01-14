// DoM objects
const questionTitle = document.querySelector("#question-title");
const choices = document.querySelector("#choices");

// Constants
const questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices : [ "string", "booleans", "alerts", "numbers" ],
        answer: "alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within ___________.",
        choices : [ "quotes", "curly brackets", "parenthesis", "square brackets" ],
        answer: "parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store _________.",
        choices : [ "numbers and strings", "other arrays", "booleans", "all of the above" ],
        answer: "all of the above"
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        choices : [ "commas", "curly brackets", "quotes", "parenthesis" ],
        answer: "quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices : [ "JavaScript", "terminal / bash", "for loops", "console.log" ],
        answer: "console.log"
    },
];

var questionIndex = 0;
var currentQuestion = questions[questionIndex];

function showQuestion(){
    questionTitle.textContent = (questionIndex+1) + ". " + currentQuestion.question;
    for(let i=0; i < currentQuestion.choices.length; i++) {
        const button = document.createElement('button');
        button.textContent = currentQuestion.choices[i];
        choices.appendChild(button);
    }
}    