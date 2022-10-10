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
    if (playerSelection == computerSelection) {
        return "Tie";
    }
    if ((playerSelection == "rock" || playerSelection == "rocks") && computerSelection == "paper") {
        return "Computer wins! 👀";
    } else if ((playerSelection == "rock" || playerSelection == "rocks") && computerSelection == "scissors") {
        return "Player wins! 💪";
    } else if ((playerSelection == "paper" || playerSelection == "papers") && computerSelection == "rock") {
        return "Player wins! 💪";
    } else if ((playerSelection == "paper" || playerSelection == "rocks") && computerSelection == "scissors") {
        return "Computer wins! 👀";
    } else if ((playerSelection == "scissors" || playerSelection == "scissor") && computerSelection == "rock") {
        return "Computer wins! 👀";
    } else if ((playerSelection == "scissors" || playerSelection == "scissor") && computerSelection == "paper") {
        return "Player wins! 💪";
    }
}

function game() {
    let playerTotal = 0;
    let computerTotal = 0;    
    alert("Welcome to the Game! 🎮\n\nPlease press 'OK' to start!")
    alert("🚨 Rules: Please write 'Rock', 'Paper' or 'Scissors'. The computer will do the same. \n\nThe result will be defined by:\n- Rock beats Scissors.\n- Paper beats Rock.\n- Scissors beats Paper.\n\nLet's play 5 rounds!")
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("🕹 Please, enter 'Rock', 'Paper', or 'Scissors':");
        while(!(playerSelection.toLowerCase().trim() == "rock" || playerSelection.toLowerCase().trim() == "paper" || playerSelection.toLowerCase().trim() == "scissors" || playerSelection.toLowerCase().trim() == "scissor" || playerSelection.toLowerCase().trim() == "papers" || playerSelection.toLowerCase().trim() == "rocks")) {
            playerSelection = prompt("🔴 PLEASE ENTER A VALID VALUE.\n\nPlease, enter 'Rock', 'Paper', or 'Scissors':");
        }
        let computerSelection = computerPlay();
        let thisRoundResult = playRound(playerSelection.toLowerCase().trim(), computerSelection.toLowerCase());
        if(thisRoundResult.startsWith("Player wins")) {
            playerTotal++;
        } else if(thisRoundResult.startsWith("Computer wins")) {
            computerTotal++;
        }
        alert(`Computer election: ${computerSelection}.\n\nThis round: ${thisRoundResult}\n\nPlayer vs Computer: ${playerTotal} - ${computerTotal}`)
    }
    let winner;
    if(playerTotal > computerTotal) {
        winner = "🕺 PLAYER";
    } else if (computerTotal > playerTotal) {
        winner = "🖥 COMPUTER"
    } else {
        winner = false;
    }
    if(winner) {
        alert(`🏁 And the final result is:\n\n🥁 🥁 🥁\n\n${winner} WINS! 🏅`)
    } else {
        alert("And the final result is:\n\nTIE!")
    }
}
game();