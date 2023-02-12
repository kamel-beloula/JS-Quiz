const questionTitle = document.getElementById("question-title");
const choices = document.getElementById("choices");
const feedback = document.getElementById("feedback");
let currentScore = document.getElementById("score");

const questions = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["string", "booleans", "alerts", "numbers"],
    answer: [false, false, true, false],
  },
  {
    question:
      "The condition in an if / else statement is enclosed within ___________.",
    choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    answer: [false, false, true, false],
  },
  {
    question: "Arrays in JavaScript can be used to store _________.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: [false, false, false, true],
  },
  {
    question:
      "String values must be enclosed within ______ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parenthesis"],
    answer: [false, false, true, false],
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: [false, false, false, true],
  },
];

var questionIndex = 0;

function showQuestion() {
  var currentQuestion = questions[questionIndex];
  questionTitle.textContent =
    questionIndex + 1 + "- " + currentQuestion.question;
  for (let i = 0; i < currentQuestion.choices.length; i++) {
    const button = document.createElement("button");
    button.textContent = currentQuestion.choices[i];
    choices.appendChild(button);
    button.setAttribute("id", "btn");
    button.setAttribute("data-correct", currentQuestion.answer[i]);
  }
}

function clearPreviousQuestion() {
  questionTitle.textContent = "";
  while (choices.firstElementChild) {
    choices.firstElementChild.remove();
  }
}

const correctAudio = new Audio("./assets/sfx/correct.wav");
const incorrectAudio = new Audio("./assets/sfx/incorrect.wav");

choices.addEventListener("click", function (event) {
  var element = event.target;
  if (element.matches("button")) {
    var correct = element.getAttribute("data-correct");
    if (correct === "true") {
      feedback.textContent = "Correct!";
      score += 10;
      currentScore.textContent = score;
      correctAudio.play();
    } else {
      feedback.textContent = "Wrong!";
      secondsLeft -= 10;
      incorrectAudio.play();
    }
    questionIndex++;
    if (questionIndex === questions.length) {
      endQuiz();
    } else {
      clearPreviousQuestion();
      showQuestion();
    }
  }
});
