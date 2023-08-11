function getComputerChoice(){
    const choices = ['rock','paper','scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

computerSelection = getComputerChoice();
let playerScore= 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {

    let results = '';
    
    if( (playerSelection == 'rock' && computerSelection == 'scissors')  || 
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')){

        results = ( 'You win ' + playerSelection +' ' + 'beats ' + computerSelection);
        playerScore += 1;
        
        if(playerScore == 5){

            let winTxt = document.getElementById('winner');
            winTxt.textContent = 'You Won the game.'
            resetgame();
    
          }
    }
    else if(playerSelection == computerSelection){
            results = ('Its a tie');
    }
    else{
            results =('You lose' +' '+ computerSelection +' '+'beats '+ playerSelection);
            computerScore += 1;

            if(computerScore == 5){
                let winTxt = document.getElementById('winner');
                winTxt.textContent = 'You Lost. Venkat the great defeated you';
                resetgame();
            }
    }

    
      
        document.getElementById('result').textContent = results;
        document.getElementById('playerScore').textContent = 'Your score: '+playerScore;
        document.getElementById('compScore').textContent = 'Venkats score: ' +computerScore;

}
   
    function resetgame(){
        playerScore = 0;
        computerScore = 0;
    }
    
    
    const rockbtn = document.getElementById('rock');
    const paperbtn = document.getElementById('paper');
    const scissorsbtn = document.getElementById('scissors'); 
    rockbtn.addEventListener('click',() => {
        getComputerChoice();
        const compResult = getComputerChoice();
        console.log(playRound('rock',compResult));
        
    })

    paperbtn.addEventListener('click',() => {
        getComputerChoice();
        const compResult = getComputerChoice();
        console.log(playRound('paper',compResult));
        
    })

    scissorsbtn.addEventListener('click',() => {
        getComputerChoice();
        const compResult = getComputerChoice();
        console.log(playRound('scissors',compResult))
        
    })

      

    
  
