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
  playerSelection = playerSelection.toLowerCase();
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

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      "Enter your choice rock - paper - scissors : "
    );
    const computerSelection = getComputerChoice();
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
  }

  if (playerScore > computerScore) {
    console.log("You won the game");
  } else if (playerScore < computerScore) console.log("You lost the game");
  else console.log("It's a draw");
}

game();
