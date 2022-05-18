// Images Dices
let diceImg = [
    "./img/dice-01.svg",
    "./img/dice-02.svg",
    "./img/dice-03.svg",
    "./img/dice-04.svg",
    "./img/dice-05.svg",
    "./img/dice-06.svg",
];

// All Variables
const dices = document.querySelectorAll("img");
const btnPlay = document.querySelector("#play");
const btnReset = document.querySelector("#reset");
const resultMsg = document.querySelector("#result");

let playerOneScore = 0;
let playerTwoScore = 0;


// Button With Event - Clicks
btnPlay.addEventListener("click", () => {
    let diceOne = Math.floor(Math.random() * 6);
    let diceTwo = Math.floor(Math.random() * 6);
    // console.log(diceOne, diceTwo);
    document.querySelector("#dice-1").setAttribute("src", diceImg[diceOne]);
    document.querySelector("#dice-2").setAttribute("src", diceImg[diceTwo]);

    if (diceOne == diceTwo) {
        console.log("Its A tei!");
        playerTwoScore--; // באג מוסיף אחד לשחקן השני גם שיוצא שווה
        // פתרון זמני
    }

    if (diceOne > diceTwo) {
        playerOneScore++;
    } else {
        playerTwoScore++;
    }
    updateScore();

    if (playerOneScore === 5 || playerTwoScore === 5) {
        theWinner();
    }
})

btnReset.addEventListener("click", () => {
    document.querySelector("body").style.backgroundColor = "var(--background-main)";
    playerOneScore = 0;
    playerTwoScore = 0;
    btnPlay.style.display = "block";
    btnReset.style.display = "none";
    updateScore();
    location.reload();
})



// Functions
function updateScore() {
    document.querySelector("#score-player").textContent = playerOneScore;
    document.querySelector("#score-computer").textContent = playerTwoScore;
}

function theWinner() {
    let backgroundColor;
    if (playerOneScore === 5) {
        console.log(`player One The Winner!!!`);
        backgroundColor = "#05c46b";
        resultMsg.textContent = `Player One The Winner!!!`;
        resultMsg.style.backgroundColor = "#fff";

    } else {
        console.log(`Player Two The Winner!!!`);
        backgroundColor = "#ff3f34";
        resultMsg.textContent = `Player Two The Winner!!!`;
        resultMsg.style.backgroundColor = "#fff";
    }
    document.querySelector("body").style.backgroundColor = backgroundColor;
    hideIconAndShowReset();
}

function hideIconAndShowReset() {
    btnPlay.style.display = "none";
    btnReset.style.display = "block";
}