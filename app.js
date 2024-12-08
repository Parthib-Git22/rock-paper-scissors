let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    let options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    // computer choice 
    return options[randIdx];
}
const drawGame = () => {
    msg.innerText = "Game Drawn";
    msg.style.backgroundColor = "blue";
}
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    console.log(`user choice = ${userChoice}`);
    // Generate computer choice -> create another fn (modular way of programming)
    const compChoice = genCompChoice();
    console.log(`comp choice = ${compChoice}`);

    if(userChoice === compChoice){
        // draw game
        drawGame();
    }else{
        let userWin = true; // assuming user wins
        if(userChoice === "rock"){
            // compChoice -> paper,scissors
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            // compChoice -> rock,scissors
            userWin = compChoice === "scissors" ? false : true;
        }else{
            // compChoice -> rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}
choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})