let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randidx = Math.floor(Math.random()*3);
    return options[randidx];
};

const dramGame = () => {
    msg.innerText = "Game was Draw. Play Again.";
    msg.style.backgroundColor = "#003049";

};

const showWiner = ( userWin,userChoice,compChoice) => {
    if(userWin){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You Win! Your ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You lost :( .  ${compChoice} Beats Your  ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice ();
    if(userChoice === compChoice){
        dramGame();
    } else{
        let userWin = true;
        if(userChoice ==="rock"){
            userWin = compChoice === "paper"? false:true;
        }else if(userChoice ==="paper"){
            userWin = compChoice === "scissors"? false:true;
        }else {
            userWin = compChoice === "rock"? false:true;
        } 
        showWiner(userWin, userChoice, compChoice);   
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});