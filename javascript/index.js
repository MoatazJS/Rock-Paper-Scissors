var rockAudio = document.querySelector("#rockSound");
var paperAudio = document.querySelector("#paperSound");
var scissorsAudio = document.querySelector("#scissorSound");
var playerScore = document.querySelector(".playerScore");
var computerScore = document.querySelector(".computerScore");
var choices = ["rock", "paper", "scissors"];
var playerScoreCount = 0;
var computerScoreCount = 0;
var resultText = document.querySelector("#resultText");
var allChoices = document.querySelectorAll(".choiceImg");
var icons = document.querySelectorAll("i");
/** SOUNDS SECTION */
function stopAllSounds() {
  rockAudio.pause();
  paperAudio.pause();
  scissorsAudio.pause();

  rockAudio.currentTime = 0;
  paperAudio.currentTime = 0;
  scissorsAudio.currentTime = 0;
}

function playRockMusic() {
  rockAudio.currentTime = 0;
  rockAudio.play();
}

function playPaperMusic() {
  paperAudio.currentTime = 0;
  paperAudio.play();
}

function playScissorsMusic() {
  scissorsAudio.currentTime = 0;
  scissorsAudio.play();
}
allChoices.forEach((img) => {
  img.addEventListener("click", function () {
    const playerChoice = img.dataset.choice;

    stopAllSounds();

    if (playerChoice === "rock") playRockMusic();
    else if (playerChoice === "paper") playPaperMusic();
    else if (playerChoice === "scissors") playScissorsMusic();

    startRound(playerChoice);
  });
});

/** Game Logic Section */

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function startRound(playerChoice) {
  var computerChoice = getComputerChoice();

  var result;

  if (playerChoice === computerChoice) {
    result = "It's a draw";
  } else if (
    (playerChoice == "rock" && computerChoice == "scissors") ||
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "scissors" && computerChoice == "paper")
  ) {
    result = "You Win!";
    playerScoreCount++;
  } else if (
    (playerChoice == "rock" && computerChoice == "paper") ||
    (playerChoice == "paper" && computerChoice == "scissors") ||
    (playerChoice == "scissors" && computerChoice == "rock")
  ) {
    result = "You Lose!";
    computerScoreCount++;
  }
  playerScore.textContent = playerScoreCount;
  computerScore.textContent = computerScoreCount;
  resultText.textContent = `You chose ${playerChoice}, Computer chose ${computerChoice}. ${result}`;
}

var toggleBtn = document.querySelector(".toggleBtn");
function switchTheme() {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  toggleBtn
    .querySelectorAll("i")
    .forEach((icon) => icon.classList.toggle("d-none"));
}

toggleBtn.addEventListener("click", function () {
  switchTheme();
});
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  icons.forEach((icon) => icon.classList.toggle("d-none"));
}
