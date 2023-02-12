const questionTitle = document.getElementById("question-title");
const choices = document.getElementById("choices");
const feedback = document.getElementById("feedback");
let currentScore = document.getElementById("score");

//https://data-flair.training/blogs/javascript-quiz/
const questions = [
  {
    question: "JavaScript is a ___ -side programming language.",
    choices: ["Client", "Server", "Both", "None"],
    answer: [false, false, true, false],
  },
  {
    question:
      "Which of the following will write the message “Hello DataFlair!” in an alert box?",
    choices: [
      " alertBox(“Hello DataFlair!”);",
      " alert(Hello DataFlair!);",
      " msgAlert(“Hello DataFlair!”);",
      " alert(“Hello DataFlair!”);",
    ],
    answer: [false, false, false, true],
  },
  {
    question: "How do you find the minimum of x and y using JavaScript?",
    choices: [" min(x,y);", " Math.min(x,y)", " Math.min(xy)", " min(xy);"],
    answer: [false, true, false, false],
  },
  {
    question:
      "Which are the correct “if” statements to execute certain code if “x” is equal to 2?",
    choices: ["if(x 2)", " if(x = 2)", " if(x == 2)", " if(x != 2 )"],
    answer: [false, false, true, false],
  },
  {
    question: "What will the code return?" / " Boolean(3 < 7)",
    choices: ["True", "False", "NaN", "SyntaxError"],
    answer: [true, false, false, false],
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
