//dom abjects
const questionTitle = document.getElementById("question-title");
const choices = document.getElementById("choices");
const feedback = document.getElementById("feedback");
let currentScore = document.getElementById("score");

//https://data-flair.training/blogs/javascript-quiz/
//questions' array with objects
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
    question: "What will the code return?  Boolean(3 < 7)",
    choices: ["True", "False", "NaN", "SyntaxError"],
    answer: [true, false, false, false],
  },
];

//initalising the question index
var questionIndex = 0;

// adds questions elements to the questions screen
function showQuestion() {
  var currentQuestion = questions[questionIndex];
  questionTitle.textContent =
    questionIndex + 1 + "- " + currentQuestion.question; //question 1, index 0
  for (let i = 0; i < currentQuestion.choices.length; i++) {//creating questions' elements loop
    const button = document.createElement("button");//create questions' buttons
    button.textContent = currentQuestion.choices[i];//write the question text on the button
    choices.appendChild(button);//add the button to the htmk container
    button.setAttribute("id", "btn");//adds an "id" to the button
    button.setAttribute("data-correct", currentQuestion.answer[i]);//adds a "correct" attribute to the answer
  }
}
//hide the previous question elements
function clearPreviousQuestion() {
  questionTitle.textContent = "";
  while (choices.firstElementChild) {
    choices.firstElementChild.remove();
  }
}

//adds audio for both correct and incorrect choices
const correctAudio = new Audio("./assets/sfx/correct.wav");
const incorrectAudio = new Audio("./assets/sfx/incorrect.wav");

//allocate an event listener to the choices element
choices.addEventListener("click", function (event) {
  var element = event.target;//allocate the clicked element to a variable
  if (element.matches("button")) {//test if the clicked element is a button
    var correct = element.getAttribute("data-correct");//retrieve the data attribute and test it
    if (correct === "true") {
      feedback.textContent = "Correct!";//displays "correct" if the choice is correct
      score += 10;//score increses by 10
      currentScore.textContent = score;//displays new score
      correctAudio.play();//plays the correct answer audio
    } else {
      feedback.textContent = "Wrong!";//displays "wrong" when choice os wrong
      secondsLeft -= 10;//score decreases by 10
      incorrectAudio.play();//plays the incorrect audio
    }
    questionIndex++;// go to the next question
    if (questionIndex === questions.length) {//check if it's the last question
      endQuiz();
    } else {
      clearPreviousQuestion();//hide previous question
      showQuestion();//inhide the next question
    }
  }
});
