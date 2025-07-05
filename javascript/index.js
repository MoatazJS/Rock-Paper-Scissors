var rockChoice = document.querySelector(".rockChoice");
var paperChoice = document.querySelector(".paperChoice");
var scissorsChoice = document.querySelector(".scissorsChoice");

var rockAudio = document.querySelector("#rockSound");
var paperAudio = document.querySelector("#paperSound");
var scissorsAudio = document.querySelector("#scissorSound");

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

rockChoice.addEventListener("click", function () {
  stopAllSounds();
  playRockMusic();
});

function playPaperMusic() {
  paperAudio.currentTime = 0;
  paperAudio.play();
}
paperChoice.addEventListener("click", function () {
  stopAllSounds();
  playPaperMusic();
});

function playScissorsMusic() {
  scissorsAudio.currentTime = 0;
  scissorsAudio.play();
}
scissorsChoice.addEventListener("click", function () {
  stopAllSounds();
  playScissorsMusic();
});
