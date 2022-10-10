const Choices = {
    Rock: "ROCK",
    Paper: "PAPER",
    Scissor: "SCISSOR",
}

function getType(text) {
    if (text.toUpperCase() === "ROCK") return Choices.Rock
    if (text.toUpperCase() === "PAPER") return Choices.Paper
    return Choices.Scissor
}

function getRandomInt() {
    return Math.floor(Math.random() * 700)
}

function getComputerMove() {
    let random = getRandomInt() % 3
    let choice

    console.log(random)
    switch (random) {
        case 0:
            choice = Choices.Rock
            break;
        case 1:
            choice = Choices.Paper
            break;
        case 2:
            choice = Choices.Scissor
            break;
        default:
            console.log("Es ist ein Fehler aufgetreten")
            break;
    }
    return choice
}

function playRound(player, computer) {
    let playerChoice = getType(player),
        computerChoice = getType(computer)

    if (playerChoice === computerChoice) return "Its a draw!"
    let win = didPlayerWin(playerChoice, computerChoice)
    if (win) {
        return "You won! " + playerChoice + " beats " + computerChoice
    } else {
        return "You lose! " + computerChoice + " beats " + playerChoice
    }
}

function didPlayerWin(playerChoice, computerChoice) {
    switch (playerChoice) {
        case Choices.Rock:
            return computerChoice === Choices.Scissor
        case Choices.Paper:
            return computerChoice === Choices.Rock
        default:
            return computerChoice === Choices.Paper
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerMove(),
            playerChoice
        playerChoice = prompt("Bitte gebe deinen nächsten Wurf an:", "Paper")
        console.log(playerChoice)
        console.log(computerChoice)
        console.log(playRound(playerChoice, computerChoice))
    }
}