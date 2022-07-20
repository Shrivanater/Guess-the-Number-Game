'use strict';

let secretNum = Math.floor(Math.random() * 20) + 1;
console.log(secretNum);

document.querySelector('.check').addEventListener('click', checkNumber) 

function checkNumber(){ 
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = '⛔️ No number!';
    }
    else{
        if(guess === secretNum)
            win();
        else{
            document.querySelector('.score').textContent--;

            if(document.querySelector('.score').textContent === '0'){
                document.querySelector('.message').textContent = '😖 Out of guesses!';
                btnCheck.disabled = true;
                document.querySelector('.guess').disabled = true
            }
            else if(guess > secretNum)
                document.querySelector('.message').textContent = 'Go Lower...';
            else
                document.querySelector('.message').textContent = 'Go Higher...';
        }
    }
};

function win(){
    document.querySelector('.message').textContent = 'Correct!! 🥳🥳🥳';
    document.querySelector('.highscore').textContent = Math.max(document.querySelector('.highscore').textContent, document.querySelector('.score').textContent);   
    document.querySelector('.number').textContent = secretNum;

    document.body.style.backgroundColor = "limegreen";

    document.querySelector('.check').disabled = true;
    document.querySelector('.guess').disabled = true;
}

document.querySelector('.again').addEventListener('click', again);

function again(){
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').textContent = '?';

    document.body.style.backgroundColor = "#222";

    document.querySelector('.guess').disabled = false;
    document.querySelector('.guess').value = '';  

    document.querySelector('.check').disabled = false;

    secretNum = Math.floor(Math.random() * 20);   
}

