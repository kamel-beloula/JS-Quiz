//dom objects and variables
var highScoresList = document.getElementById("highscores")
const clearButton = document.getElementById("clear")
const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

//load the renderleaderboard function when the page is loaded
window.addEventListener("load", function() {
    renderLeaderbord();
});

//function to generate the leader board rows dynamically
function renderLeaderbord(){
    for (let i = 0; i <= leaderboard.length; i++){ // loop through the leaderboard array elements
        const li = document.createElement("li"); //create an "li" html element 
        li.textContent = (leaderboard[i].player+" - "+leaderboard[i].score); //write the player and score values on the li element
        highScoresList.append(li); // adds the "li" tag to the "ol" tag
    }  
}
        
//clearing the localstorage and clearing the leaderbord list function
clearButton.addEventListener("click", function() {
    localStorage.clear();
    highScoresList.innerHTML = "";
});
