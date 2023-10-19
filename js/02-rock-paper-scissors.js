playerOne = prompt("Please Pick Rock, Paper, or Scissors.")
let playerChoice = playerOne.toLowerCase()

while (playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissors') {
  playerChoice = prompt("Pick a valid choice")
  playerChoice = playerChoice.toLowerCase()
}


let computer = Math.floor(Math.random() * 3)
let computerChoice = ''

if (computer === 0) {
  computerChoice = "rock"
} else if (computer === 1) {
    computerChoice = "paper"
} else {
  computerChoice = "scissors"
}

switch (playerChoice) {
    case "rock":
      if ("rock" === computerChoice){
        alert("Tie")
        break
      } else if (computerChoice.length === 5){
        alert("Paper Beats Rock. You Lose")
        break
      } else if (computerChoice.length === 8) {
        alert ("Rock Beats Scissors. You Win")
        break
      }
    
    case "paper":
      if ("paper" === computerChoice){
        alert("Tie")
        break
      } else if (computerChoice.length === 8){
        alert("Scissors Beats Paper. You Lose")
        break
      } else if (computerChoice.length === 4) {
        alert ("Paper Beats Rock. You Win")
        break
      }
    
    case "scissors":
      if ("scissors" === computerChoice){
        alert("Tie")
        break
      } else if (computerChoice.length === 4){
        alert("Rock Beats Scissors. You Lose")
        break
      } else if (computerChoice.length === 5) {
        alert ("Scissors Beats Paper. You Win")
        break
      }   
  }