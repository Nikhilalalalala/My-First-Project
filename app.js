let userScore =0;
let comScore = 0;
const userScore_span = document.getElementById("user-score");
const comScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p= document.getElementById("result-statement");
const computerChoiceStatement_p = document.getElementById("computer-choice");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function convertChoice(input) {
    if (input === 'r') {
        return 'Rock';
    } else if (input === "p") {
        return "Paper";
    } else if (input === "s") {
        return "Scissors";
    } else {
        console.log("Error!!");
    }
}


function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore ++;
    userScore_span.innerHTML = userScore;
    comScore_span.innerHTML = comScore;
    console.log("User Wins");
    computerChoiceStatement_p.innerHTML = `Computer chose ${convertChoice(computerChoice)}`;
    result_p.innerHTML = `${convertChoice(userChoice)} beats ${convertChoice(computerChoice)} . You win! :)`;
}

function loses(userChoice, computerChoice) {
    comScore ++;
    userScore_span.innerHTML = userScore;
    comScore_span.innerHTML = comScore;   
    console.log("User Loses");
    computerChoiceStatement_p.innerHTML = `Computer chose ${convertChoice(computerChoice)}`;
    result_p.innerHTML = `${convertChoice(computerChoice)} beats ${convertChoice(userChoice)} . You lose! :(`;
}

function draw(userChoice, computerChoice) {
    console.log("Its a draw");
    computerChoiceStatement_p.innerHTML = `Computer chose ${convertChoice(computerChoice)}`;
    result_p.innerHTML = "Its a draw!";
}

function game(userChoice) {
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        case "rs" : 
        case "pr" :
        case "sp" :
            win(userChoice, computerChoice);
            break;
        case "rp" :
        case "ps" :
        case "sr" :
            loses(userChoice, computerChoice);
            break;
        case "rr" :
        case "pp" :
        case "ss" :
            draw(userChoice, computerChoice)
            break;
    } 
    
}

function main() {
    rock_div.addEventListener('click', function() {
        console.log("Hey, you clicked on a Rock");
        game("r");
    })

    paper_div.addEventListener('click', function() {
        console.log("Hey, you clicked on a Rock");
        game("p");
    })

    scissors_div.addEventListener('click', function() {
        console.log("Hey, you clicked on a Rock");
        game("s");
    })
}

main();