var highScoresList = document.getElementById("highscores")
const clearButton = document.getElementById("clear")
const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
console.log(leaderboard)
console.log(leaderboard.length)

window.addEventListener("load", function() {
    renderLeaderbord();
});

function renderLeaderbord(){
    for (let i = 0; i <= leaderboard.length; i++){
        const li = document.createElement("li");
        li.textContent = (leaderboard[i].player+" - "+leaderboard[i].score);
        highScoresList.append(li);
    }  
}
        
clearButton.addEventListener("click", function() {
    localStorage.clear();
    highScoresList.innerHTML = "";
});
