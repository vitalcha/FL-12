const rangeAdd = 4;
const prize = 100;
const tryCounts = 3;
const nextGameTry = 2;
const nextPrize = 2;
const inputInvalid = -1;
const initialRange = 8;

let gameNumber, userNumber;
let prizeNextGame = 2;
let attemptsAmount = 3;
let maxRange = initialRange;
let possiblePrize = 100;
let totalPrize = 0;
let isPlaying = true;

if (confirm('Do you want to play a game?')) {
  while (isPlaying) {
    attemptsAmount = tryCounts;
    gameNumber = Math.floor(Math.random() * (maxRange + 1));
    for (attemptsAmount; attemptsAmount > 0; attemptsAmount--) {
      userNumber = parseInt(prompt(`Choose a roulette pocket number from 0 to ${maxRange}
Attempts left: ${attemptsAmount}
Total prize: ${totalPrize}$
Possible prize on current attempt: ${possiblePrize}$`));
      if (!Number.isInteger(userNumber)) {
        userNumber = inputInvalid;
      }
      if (userNumber === gameNumber) {
        attemptsAmount = 0;
        totalPrize += possiblePrize;
        if (confirm(`Congratulation, you won!
Your prize is: ${totalPrize}$
Do you want to continue?`)) {
          possiblePrize = prize * prizeNextGame;
          prizeNextGame *= nextGameTry;
          maxRange += rangeAdd;
        } else {
          possiblePrize = prize;
          alert(`Thank you for your participation. 
Your prize is: ${totalPrize}$`);
          if (!confirm('Do you want to play again?')) {
            isPlaying = false;
          } else {
            totalPrize = 0;
            maxRange = initialRange;
          }
        }
      } else {
        if (attemptsAmount === 1) {
          possiblePrize = prize;
          alert(`Thank you for your participation. 
Your prize is: ${totalPrize}$`);
          if (!confirm('Do you want to play again?')) {
            isPlaying = false;
          } else {
            totalPrize = 0;
            maxRange = initialRange;
          }
        } else {
          possiblePrize /= nextPrize;
        }
      }
    }
  }
} else {
  alert('You did not become a billionaire, but can.');
}
