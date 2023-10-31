function getComputerChoice() {
  let choice = getRandomInt(3);
  if (choice === 0) return "rock";
  else if (choice == 1) return "paper";
  else return "scissors";
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection != null) playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  let result = "";
  let speech = new SpeechSynthesisUtterance(result);
  speech.lang = "en-US";
  speech.volume = 5;
  speech.rate = 1;
  if (playerSelection === computerSelection) {
    return "It's a Draw";
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }

    if (computerSelection === "scissors") {
      return `You Won! ${playerSelection} beats ${computerSelection}`;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return `You Won! ${playerSelection} beats ${computerSelection}`;
    }

    if (computerSelection === "scissors") {
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }

    if (computerSelection === "paper") {
      return `You Won! ${playerSelection} beats ${computerSelection}`;
    }
  }
}

function playRoundResult(playerSelection, computerSelection) {
  if (playerSelection != null) playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) return 3;
  else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return 2;
    }

    if (computerSelection === "scissors") {
      return 1;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return 1;
    }

    if (computerSelection === "scissors") {
      return 2;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return 2;
    }

    if (computerSelection === "paper") {
      return 1;
    }
  }
}

function readingText(text) {
  if (text.length > 0) {
    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    speech.volume = 5;
    speech.rate = 1;
    window.speechSynthesis.speak(speech);
    return true;
  }
  return false;
}

const rock_btn = document.getElementById("rock-btn");
const paper_btn = document.getElementById("paper-btn");
const scissors_btn = document.getElementById("scissors-btn");

let player_rock_animation = document.getElementById("player-rock");
let player_paper_animation = document.getElementById("player-paper");
let player_scissors_animation = document.getElementById("player-scissors");

let cpu_rock_animation = document.getElementById("cpu-rock");
let cpu_paper_animation = document.getElementById("cpu-paper");
let cpu_scissors_animation = document.getElementById("cpu-scissors");
let choosing = document.getElementsByClassName("choosing");
let continue_game = document.getElementsByClassName("continue")[0];
let scoreCpuElement = document.querySelector(".score-cpu");
let scorePlayerElement = document.querySelector(".score-player");

async function game() {
  let playerScore = 0;
  let computerScore = 0;
  let round = 0;

  while (playerScore < 5 && computerScore < 5) {
    round++;
    console.log("Round: " + round);
    document.querySelector(".roundCounter").textContent = "Round : " + round;
    const playerSelection = await getUserChoice();
    const computerSelection = getComputerChoice();
    animation(playerSelection, computerSelection);
    let result = playRound(playerSelection, computerSelection);
    let isWinnig = playRoundResult(playerSelection, computerSelection);
    console.log(result);

    if (isWinnig === 3) {
      document.querySelector(".gameStatus").textContent = result;
    } else {
      document.querySelector(".gameStatus").textContent = result;
      if (isWinnig === 1) {
        playerScore++;
      } else if (isWinnig === 2) computerScore++;
    }

    scoreCpuElement.textContent = "Score: " + computerScore;
    scorePlayerElement.textContent = "Score: " + playerScore;
    readingText(result);
    const buttonClicked = await waitForButtonClick(playerScore, computerScore);
    stopAnimations();

    if (playerScore === 5 || computerScore === 5) {
      if (playerScore > computerScore) {
        document.querySelector(".gameStatus").textContent = "You won the game";
        readingText("You won the game");
        console.log("You won the game");
      } else if (playerScore < computerScore) {
        document.querySelector(".gameStatus").textContent = "You lost the game";
        readingText("You lost the game");
        console.log("You lost the game");
      }
      console.log("Game Over----");
      readingText("Game is finished");
      playerScore = 0;
      computerScore = 0;
      round = 0;
      resetGame();
    }
  }
}

function resetGame() {
  document.querySelector(".roundCounter").textContent = "Round : 0";
  document.querySelector(".gameStatus").textContent = "Game Status";
  scoreCpuElement.textContent = "Score: 0";
}

function waitForButtonClick(playerScore, computerScore) {
  return new Promise((resolve) => {
    let continue_game = document.getElementsByClassName("continue")[0];
    if (playerScore === 5 || computerScore === 5) {
      document.querySelector(".continue").textContent = "Play Again";
      document.querySelector(".continue").style.backgroundColor = "red";
    } else {
      document.querySelector(".continue").textContent = "Click here to Continue";
    }

    continue_game.addEventListener("click", function () {
      continue_game.removeEventListener("click", arguments.callee);
      resolve(true);
    });
  });
}
function getUserChoice() {
  return new Promise((resolve) => {
    rock_btn.addEventListener("click", () => resolve("rock"));
    paper_btn.addEventListener("click", () => resolve("paper"));
    scissors_btn.addEventListener("click", () => resolve("scissors"));
  });
}

function animation(playerSelection, computerSelection) {
  for (let i = 0; i < choosing.length; i++) {
    choosing[i].style.display = "none";
  }

  if (playerSelection === "rock") {
    player_rock_animation.style.display = "flex";
  }
  if (playerSelection === "paper")
    player_paper_animation.style.display = "flex";
  if (playerSelection === "scissors")
    player_scissors_animation.style.display = "flex";

  if (computerSelection === "rock") cpu_rock_animation.style.display = "flex";
  if (computerSelection === "paper") cpu_paper_animation.style.display = "flex";
  if (computerSelection === "scissors")
    cpu_scissors_animation.style.display = "flex";

  continue_game.style.display = "flex";
  console.log(choosing);
}

function stopAnimations() {
  for (let i = 0; i < choosing.length; i++) {
    choosing[i].style.display = "flex";
  }

  player_rock_animation.style.display = "none";
  player_paper_animation.style.display = "none";
  player_scissors_animation.style.display = "none";

  cpu_rock_animation.style.display = "none";
  cpu_paper_animation.style.display = "none";
  cpu_scissors_animation.style.display = "none";
  continue_game.style.display = "None";
}

game();

const audio = document.getElementById("myAudio");
const playPauseButton = document.getElementById("playPauseButton");
const muteUnmuteButton = document.getElementById("muteUnmuteButton");
const volumeControl = document.getElementById("volumeControl");

playPauseButton.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    document.getElementsByClassName("pauseIcon")[0].style.display = "flex";
    document.getElementsByClassName("playIcon")[0].style.display = "none";
  } else {
    audio.pause();
    document.getElementsByClassName("playIcon")[0].style.display = "flex";
    document.getElementsByClassName("pauseIcon")[0].style.display = "none";
  }
});

muteUnmuteButton.addEventListener("click", function () {
  if (audio.muted) {
    audio.muted = false;
    document.getElementsByClassName("muteIcon")[0].style.display = "none";
    document.getElementsByClassName("unmuteIcon")[0].style.display = "flex";
  } else {
    audio.muted = true;
    document.getElementsByClassName("unmuteIcon")[0].style.display = "none";
    document.getElementsByClassName("muteIcon")[0].style.display = "flex";
  }
});

volumeControl.addEventListener("input", () => {
  audio.volume = volumeControl.value;
});
