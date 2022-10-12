const Choices = {
    Rock: "ROCK",
    Paper: "PAPER",
    Scissor: "SCISSOR",
}

let yourWins = 0
let computerWins = 0

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

function playRound(playerChoice) {
    let computerChoice = getComputerMove()
    console.log(playerChoice + " " + computerChoice)

    if (playerChoice === computerChoice) return "Its a draw!"
    let win = didPlayerWin(playerChoice, computerChoice)
    if (win) {
        yourWins++
        return "You won! " + playerChoice + " beats " + computerChoice + ". You have " + yourWins + " wins."
    } else {
        computerWins++
        return "You lose! " + computerChoice + " beats " + playerChoice + ". You have " + yourWins + " wins."
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

function playGame(playerChoice) {
    let resultDiv = document.querySelector("#result")
    resultDiv.innerHTML = playRound(playerChoice)

    if (yourWins === 5) {
        resultDiv.innerHTML = "You Won the game!"
        yourWins = 0
        computerWins = 0
    } else if (computerWins === 5) {
        resultDiv.innerHTML = "The computer won!"
        yourWins = 0
        computerWins = 0
    }
}

function displayWinMessage() {

}