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

  if (playerSelection === computerSelection) return "It's a Draw";
  else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }

    if (computerSelection === "scissors") {
      return `You Won! ${playerSelection} beats ${computerSelection}`;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return `You won! ${playerSelection} beats ${computerSelection}`;
    }

    if (computerSelection === "scissors") {
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }

    if (computerSelection === "paper") {
      return `You won! ${playerSelection} beats ${computerSelection}`;
    }
  }
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

  while (playerScore < 5 && computerScore < 5) {
    const playerSelection = await getUserChoice();
    const computerSelection = getComputerChoice();
    animation(playerSelection, computerSelection);
    let result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result.localeCompare("It's a Draw") === 0) {
    } else {
      let won = result.match("You Won");
      console.log(won);
      if (won != null) {
        playerScore++;
      } else computerScore++;
    }
    console.log("playerScore: " + playerScore);
    console.log("computerScore: " + computerScore);
    scoreCpuElement.textContent = "Score: " + computerScore;
    scorePlayerElement.textContent = "Score: " + playerScore;
    const buttonClicked = await waitForButtonClick();
    stopAnimations();
  }

  if (playerScore > computerScore) {
    console.log("You won the game");
  } else if (playerScore < computerScore) console.log("You lost the game");
  else console.log("It's a draw");
}

game();
function waitForButtonClick() {
  return new Promise((resolve) => {
    let continue_game = document.getElementsByClassName("continue")[0];

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
