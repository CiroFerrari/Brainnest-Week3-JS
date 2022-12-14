function computerPlay() {
    let random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "rocks":
            playerSelection = "rock";
            break;
        case "papers":
            playerSelection = "paper";
            break;
        case "scissor":
            playerSelection = "scissors";
            break;
    }
    if (playerSelection == computerSelection) {
        return "Draw";
    }
    if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
        return "Player wins! 💪";
    } else if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "rock")) {
        return "Computer wins! 👀";
    }
}

function game() {
    let playerTotal = 0;
    let computerTotal = 0;
    alert("Welcome to the Game! 🎮\n\nPlease press 'OK' to start!")
    alert("🚨 Rules: Please write 'Rock', 'Paper' or 'Scissors'. The computer will do the same. \n\nThe result will be defined by:\n- Rock beats Scissors.\n- Paper beats Rock.\n- Scissors beat Paper.\n\nLet's play 5 rounds!")
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("🕹 Please, enter 'Rock', 'Paper', or 'Scissors':");
        if(playerSelection == null) {
            alert("See you the next time! 😊");
            computerTotal = 5;
            break;
        } else {
            playerSelection = playerSelection.toLowerCase().trim();
        }
        while (!(playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors" || playerSelection == "scissor" || playerSelection == "papers" || playerSelection == "rocks")) {
            playerSelection = prompt("🔴 PLEASE ENTER A VALID VALUE.\n\nPlease, enter 'Rock', 'Paper', or 'Scissors':").toLowerCase().trim();
        }
        let computerSelection = computerPlay();
        let thisRoundResult = playRound(playerSelection, computerSelection.toLowerCase());
        if (thisRoundResult.startsWith("Player wins")) {
            playerTotal++;
        } else if (thisRoundResult.startsWith("Computer wins")) {
            computerTotal++;
        }
        alert(`Computer election: ${computerSelection}.\n\nThis round: ${thisRoundResult}\n\nPlayer vs Computer: ${playerTotal} - ${computerTotal}`)
    }
    let winner;
    if (playerTotal > computerTotal) {
        winner = "🕺 PLAYER";
    } else if (computerTotal > playerTotal) {
        winner = "🖥 COMPUTER"
    } else {
        winner = false;
    }
    if (winner) {
        alert(`🏁 And the final result is:\n\n🥁 🥁 🥁 🥁 🥁\n\n${winner} WINS! 🏅`)
    } else {
        alert("And the final result is:\n\nDRAW!")
    }
}
game();