// Selecting DOM elements
const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

// Display the most recent score on the page
finalScore.innerText = `Your Score: ${mostRecentScore}`;

// Enable the "Save" button only when the username field is not empty
username.addEventListener('keyup', () => {
  saveScoreBtn.disabled = !username.value.trim();
});

// Function to save the high score
const saveHighScore = (e) => {
  e.preventDefault();

  const score = {
    score: parseInt(mostRecentScore), // Convert score to integer
    name: username.value.trim()
  };

  // Add the new score to the high scores list and sort by highest score
  highScores.push(score);
  highScores.sort((a, b) => b.score - a.score);
  
  // Keep only the top 5 scores
  highScores.splice(MAX_HIGH_SCORES);

  // Store the updated high scores list in localStorage
  localStorage.setItem('highScores', JSON.stringify(highScores));

  // Redirect the user to the home page
  window.location.assign('./index.html');
};
