const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const roundResultEl = document.getElementById("round-result");
const scoreEl = document.getElementById("score");

let humanScore = 0;
let computerScore = 0;
let round = 0;

// Helper function for delays
const delay = ms => new Promise(res => setTimeout(res, ms));

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function toggleButtons(disabled) {
  rockButton.disabled = disabled;
  paperButton.disabled = disabled;
  scissorsButton.disabled = disabled;
}

async function playRound(humanChoice) {
  if (round >= 5) {
    return;
  }

  toggleButtons(true);

  // Countdown
  roundResultEl.textContent = "3...";
  await delay(1000);
  roundResultEl.textContent = "2...";
  await delay(1000);
  roundResultEl.textContent = "1...";
  await delay(1000);

  const computerChoice = getComputerChoice();
  let roundMessage = "";

  if (humanChoice === computerChoice) {
    roundMessage = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    roundMessage = `You win! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  } else {
    roundMessage = `You lose! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  }

  round++;
  roundResultEl.textContent = `Round ${round}: ${roundMessage}`;
  scoreEl.textContent = `Score: You ${humanScore} - ${computerScore} Computer`;

  if (round >= 5) {
    endGame();
  } else {
    toggleButtons(false); // Re-enable buttons for the next round
  }
}

function endGame() {
  let finalMessage = "";
  if (humanScore > computerScore) {
    finalMessage = "You are the winner!";
  } else if (computerScore > humanScore) {
    finalMessage = "The computer is the winner!";
  } else {
    finalMessage = "It's a tie game!";
  }

  // The final result is already in roundResultEl from the last playRound call
  // We can add a more definitive "Game Over" message
  scoreEl.textContent = `Final Score: You ${humanScore} - ${computerScore} Computer. ${finalMessage}`;
  roundResultEl.textContent = "Game Over!";
  toggleButtons(true); // Keep buttons disabled at the end
}

rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissorsButton.addEventListener("click", () => playRound("scissors"));
