const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// Display the high scores in the list
if (highScores.length > 0) {
  highScoresList.innerHTML = highScores
    .map((score, index) => {
      return `<li class="high-score">${index + 1}. ${score.name} - ${score.score} points</li>`;
    })
    .join("");
} else {
  highScoresList.innerHTML = `<p>No high scores yet. Play the game to set a record!</p>`;
}
