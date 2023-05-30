function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    
    if (randomNumber === 1) {
        return 'Rock';
    } else if (randomNumber === 2) {
        return 'Paper';
    } else {
        return 'Scissors';
    };
    
};

function game(){

    function playRound(playerSelection, computerSelection) {
        var result; 
        if (playerSelection === computerSelection) {
            result = 'Draw!';
            console.log(result);
        } else if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
                   (playerSelection === 'Paper' && computerSelection === 'Rock') ||
                   (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
                    result = 'You win! ' + playerSelection + ' beats ' + computerSelection + ".";
                    console.log(result);
        } else {
            result = 'You lose :( ' + computerSelection + ' beats ' + playerSelection + ".";
            console.log(result);
        };
    }

    let i = 1;

    while(i <= 5){
        const playerSelection = prompt('Please enter your choice:');
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        i++;
    }
};

game();

