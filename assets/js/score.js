const username = document.getElementById('initials');
const submitButton = document.getElementById('submit');
const mostRecentScore = localStorage.getItem("recentScore");
const finalScore = document.getElementById('final-score');
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
submitButton.disabled = !username.value;
  console.log(username.value);
});

submitButton.addEventListener('click', () =>{
  console.log("clicked the submit button!");

  const scoore = {
    score: mostRecentScore,
    name: username.value,
  };
console.log(scoore);
});