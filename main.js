// Math.round(Math.random());
// prompt("heads or tails")
let userChoice=prompt("heads or tails?");
let randomNumber=Math.round(Math.random());
let computerChoice
// prompt("heads or tails")
if(randomNumber==0){
    computerChoice= "heads";
}
if(randomNumber==1){
    computerChoice=  "tails"
}
if(userChoice==computerChoice){
    alert("You guessed right! it landed on " + computerChoice);
}
if(userChoice!==computerChoice){
    alert("Sorry, the coin flip landed on " + computerChoice);
}

let currentYear=2022;
let birthYear=prompt("what year were you born in?");
let age=currentYear-birthYear;
if(age>21){
    alert("You are old enough to drink in the US")
}
if(age==21){
    alert("You are old enough to drink in the US...barely")
}
if(age<21){
    alert("Sorry, you are not old enough to drink in the US")
}