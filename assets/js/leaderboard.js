const leaderboard = JSON.parse(localStorage.getItem("highscores")) || [];
const highScoresList = document.getElementById("highscores");
console.log(leaderboard)

function saveLeaderbord(event){
    console.log("button clicked")
    // event.preventDefault();
    var player = initialsInput.value;
    console.log(player);
    leaderboard.push({ player, score });
    console.log(leaderboard);
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
    window.location.replace("highscores.html");
  }

function renderLeaderbord(){
   
    console.log(highScoresList)
    if (leaderboard.length===0){
        return
    }else{
        for (let i = 0; i <= leaderboard.length; i++){
            console.log(leaderboard.length)
            const li = document.createElement("li");
            li.textContent = (leaderboard[i].player+" - "+leaderboard[i].score);
            console.log(li)
            highScoresList.append(li);
        }
    }
}

document.querySelector("#clear").addEventListener("click", function() {
    localStorage.removeItem("highscores");
    highscores = [];
    renderLeaderbord();
});

window.addEventListener("load", function() {
    renderLeaderbord();
});

//  activates clear button on highscore pages to remove scores and initials from local storage
var clearBtn = document.querySelector('#clear');
clearBtn.addEventListener("click", function() {
    localStorage.clear();
    renderLeaderbord();
});

window.addEventListener("load", function() {
    renderLeaderbord();
})