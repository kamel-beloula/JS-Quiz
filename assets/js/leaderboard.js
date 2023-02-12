window.onload =  JSON.parse(localStorage.getItem("leaderbord")) || [];


function renderLeaderbord(){
    const highScoresList = document.getElementById("highscores");
    console.log(leaderboard)
    const leaderboard = JSON.parse(localStorage.getItem("highscores")) || [];
    for (let i = 0; i <= leaderboard.length; i++){
        console.log(leaderboard.length)
        const li = document.createElement("li");
        li.textContent = (leaderboard[i].player+" - "+leaderboard[i].score);
        console.log(li)
        highScoresList.appendChild(li);
    }
}
