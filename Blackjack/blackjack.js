let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
sum = firstCard + secondCard;
let isAlive = false;
let hasBlackjack = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13) + 1;
    if(randomNumber > 10){
        return 10;
    }
    else if (randomNumber === 1){
        return 11;
    }
    else{
        return randomNumber;
    }


}



function startGame(){
    isAlive = true;
   
    renderGame();
} 


function renderGame(){

    sumEl.textContent = "Sum: " + sum;
    cardEl.textContent = "Cards: "
    for(let count = 0; count<cards.length; count++)
    {
        cardEl.textContent += cards[count] + " ";
    }

  
if(sum < 21)
{
    message = "Do you want to draw new card";
}
else if(sum === 21)
{
    message = "You got blackjack";
    hasBlackjack = true;
}
else
{
    message = "You are out of the game";
    isAlive = false;
}

messageEl.textContent = message;
}

function newCard()
{
    let card = getRandomCard();
    cards.push(card);
    sum+=card;
    renderCard();
}