const inputElement = document.querySelector('.input');
const displayAlert = document.querySelector('.display-alert');
const correctOrWrong = document.querySelector('.correct-or-wrong');
const displayResult = document.querySelector('.display-result');
const guessButton = document.querySelector('.guess-button');
const resetButton = document.querySelector('.reset-button');

let score = {
  wins: 0,
  losses: 0
};
let count = 0;
let attempts = 5;
displayAlert.innerHTML = 'Attempts: ' + attempts;
guessButton.addEventListener('click', () => {
    let computerNumber = Math.floor(Math.random() * 10) + 1;

    let playerNumber = Number(inputElement.value);

    if(inputElement.value === ''){
      displayAlert.innerHTML = "You haven't entered any number!";
      displayAlert.style.color = 'red';
      setTimeout(function(){
        displayAlert.innerHTML = 'Attempts: ' + attempts;
        displayAlert.style.color = 'black';
      }, 1500);
    }
    else if(playerNumber === computerNumber && count < 5){
      count ++;
      attempts --;
      displayAlert.innerHTML = 'Attempts left: ' + attempts;
      correctOrWrong.innerHTML = 'Correct!';
      correctOrWrong.style.color = 'seagreen';
      setTimeout(function(){
        correctOrWrong.innerHTML = '';
      }, 1000);
      score.wins += 1;
    }
    else if((playerNumber < computerNumber || playerNumber > computerNumber) && count < 5){
      count ++;
      attempts --;
      displayAlert.innerHTML = 'Attempts left: ' + attempts;
      correctOrWrong.innerHTML = 'Wrong!';
      correctOrWrong.style.color = 'red';
      setTimeout(function(){
        correctOrWrong.innerHTML = '';
      }, 1000);
      score.losses += 1;
    }
    else{
      displayAlert.innerHTML = 'Sorry, not a number!';
      displayAlert.style.color = 'red';
    }

    inputElement.value = '';

    if(count === 5){
      displayAlert.innerHTML = 'Attempts finished <br> Game Over!';
      displayResult.innerHTML = 'Calculating results...';
      setTimeout(function(){
        displayResult.innerHTML = `
          Wins: ${score.wins} <br> Losses: ${score.losses}
        `;
      }, 4000);
      guessButton.disabled = true;
    }

});

resetButton.addEventListener('click', () => {
    guessButton.disabled = false;
    count = 0;
    score.wins = 0;
    score.losses = 0;
    inputElement.value = '';
    displayAlert.innerHTML = '';
    displayResult.innerHTML = '';
    displayResult.innerHTML = 'Starting the game...';
    setTimeout(function(){
      attempts = 5;
      displayAlert.innerHTML = 'Attempts: ' + attempts;
      displayResult.innerHTML = '';
    }, 2000);
});