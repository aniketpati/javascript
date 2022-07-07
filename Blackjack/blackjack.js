let firstCard = 6;
let secondCard = 15;
let cards = [firstCard, secondCard];
let sum = cards[0] + cards[1];
let isAlive = true;
let hasBlackjack = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");



function startGame(){
    renderGame();
}


function renderGame(){

    sumEl.textContent = "Sum: " + sum;
    cardEl.textContent = "Card: "+ cards[0] +" " + cards[1];

  
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
    message = "Ypu are oout of the game";
    isAlive = false;
}

messageEl.textContent = message;
}

function newCard()
{
    let card = 7;
    sum+=card;
    renderCard();
}