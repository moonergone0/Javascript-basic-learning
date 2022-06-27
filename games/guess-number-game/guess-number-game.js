
let winningNumber = 20;
let guessNumber = +prompt("Guess a number:");
if(guessNumber == winningNumber){
 console.log("You win the game");
}else{
 if(guessNumber>winningNumber){
  console.log("Guess smaller number");
 }else{
  console.log("Guess bigger number")
 }
}