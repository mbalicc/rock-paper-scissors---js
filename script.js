console.log("Najjaca firmetina bajo");
var humanScore=0;
var computerScore=0;
let humanChoice;
let computerChoice;
let rock = document.getElementById("rock");
let paper=document.getElementById("paper");
let scissors=document.querySelector("#scissors");
let text=document.getElementById("text");
let computer=document.getElementById("computer");
let cscore=document.getElementById("cscore");
let hScore=document.getElementById("hscore");



function getComputerChoice(){
   var choice;
   var rnd=Math.random();
   if(rnd<=0.33){ 
    computer.innerText="Computer je izabrao: ROCK"
    return choice="rock";
   }
    else if(rnd>0.33 && rnd<0.66){
        computer.innerText="Computer je izabrao: PAPER"
    return choice="paper";} 
    else {
        computer.innerText="Computer je izabrao: SCISSORS"
        return choice="scissors";}
}

function getHumanChoice(choice){
    console.log("Izabrao si: "+choice)
    return choice;
}




rock.addEventListener("click",()=>{humanChoice=getHumanChoice("rock");
    let winner=playRound(humanChoice,getComputerChoice());
    ispis(winner);
})


paper.addEventListener("click",function()
{
    humanChoice=getHumanChoice("paper")
    let winner=playRound(humanChoice,getComputerChoice());
    ispis(winner);
});
scissors.addEventListener("click",function()
{
    humanChoice=getHumanChoice("scissors")
    let winner=playRound(humanChoice,getComputerChoice());
    ispis(winner);
});

function playRound(humanChoice,computerChoice){
    let winner;
    if(humanChoice=="rock"&& computerChoice=="rock") {
        return winner="even";

    }

    else if(humanChoice=="rock"&& computerChoice=="paper") return winner="computer";
    else if(humanChoice=="rock"&& computerChoice=="scissors") return winner="human";
    else if(humanChoice=="paper"&& computerChoice=="paper") return winner="even";
    else if(humanChoice=="paper"&& computerChoice=="rock") return winner="human";
    else if(humanChoice=="paper"&& computerChoice=="scissors") return winner="computer";
    else if(humanChoice=="scissors" && computerChoice=="scissors") return winner="even";
    else if(humanChoice=="scissors" && computerChoice=="rock") return winner="computer";
    else if(humanChoice=="scissors" && computerChoice=="paper") return winner="human";
}

function ispis(winner){
    if(winner=="human"){
        text.innerHTML="You WON!"
        humanScore+=2;
        hScore.innerHTML=humanScore;
    }
    else if(winner=="computer"){
        text.textContent="You LOST!"
        computerScore+=2;
        cscore.innerHTML=computerScore;
    }
    else {
        text.innerHTML="It is EVEN!"
    }

}