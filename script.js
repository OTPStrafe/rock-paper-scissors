const options = ['rock', 'paper', 'scissors'];
const computerPlay = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  return options[randomNumber];
}

const playRound = (playerSelection, computerSelection) => {
  playerSelection.toLowerCase().trim();
  if (!options.includes(playerSelection)) {
    return 'You must choose rock, paper, or scissors.';
  }
  if (playerSelection === computerSelection) {
    return 'It\'s a tie!';
  }
  if (playerSelection === 'rock' && computerSelection === 'paper') {
    return 'You lose! Paper beats rock.';
  }
  if (playerSelection === 'rock' && computerSelection === 'scissors') { 
    return 'You win! Rock beats scissors.';
  }
  if (playerSelection === 'paper' && computerSelection === 'rock') {
    return 'You win! Paper beats rock.';
  }
  if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return 'You lose! Scissors beats paper.';
  }
  if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return 'You lose! Rock beats scissors.';
  }
  if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return 'You win! Scissors beats paper.';
  }
}
const game = () => {
  let playerPoints = 0;
  let computerPoints = 0;
  for(let i = 0; i < 5; i++) {
    const playerSelection = prompt('Rock, paper, or scissors?');
    const computerSelection = computerPlay();
    const response = playRound(playerSelection, computerSelection)
    alert(response);
    console.log({ response })
    if (response.includes('tie')) {
      continue;
    }
    if (response.includes('win')) {
      playerPoints++;
    } else {
      computerPoints++;
    }
  }
  if (playerPoints > computerPoints) {
    return 'You win!';
  }
  if (playerPoints < computerPoints) {
    return 'You lose!';
  }
  if (playerPoints == computerPoints) {
    return 'It\'s a tie!';
  }
}
const playerSelection = 'rock';
const computerSelection = computerPlay();

