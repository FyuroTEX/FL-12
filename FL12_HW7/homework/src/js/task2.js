let randomNumber, playerNumber, attemptPrize;
let prize = 0; let attempt = 3, maxAttempt = 3, nextAttempt = 2; const winLoseCoef = 2;
let addPoket = 4; let gamePoket = 8; let resetPoket = 8;
let maxPrize = 100; let maxPrizeReset = 100; let closeGame = -1;

let playGame = confirm(`Do you want to play a game?`);
if (playGame) {
    while (attempt >= 0) {
        if (attempt === maxAttempt) {
            randomNumber = Math.floor(Math.random() * (gamePoket + 1));
            attemptPrize = maxPrize;
        }
        switch (attempt) {
            case maxAttempt:
            case nextAttempt:
            case 1:
                playerNumber = +prompt('Choose a roulette pocket number from 0 to ' + gamePoket +
                '\n Attempts left: ' + attempt +
                '\n Tottal prize: ' + prize + '$' +
                '\n Possible prize on current attempt ' + attemptPrize + '$', '');
                attempt--;
            break;
            case 0:
                alert(`Thank you for your participation. Your prize is: ${prize}$`);
                prize = 0;
                maxPrize = maxPrizeReset;
                gamePoket = resetPoket;
                confirm('Do you want play again?') ? attempt = maxAttempt : attempt = closeGame;
                break;
            default:
                break;
        }
        switch (true) {
            case randomNumber === playerNumber:
                prize += attemptPrize;
                gamePoket += addPoket;
                maxPrize *= winLoseCoef;
                alert(`Congratulation, you won!   Your prize is: ${prize} $.`);
                confirm('Do you want to continue?') ? attempt = maxAttempt : attempt = closeGame;
                break;
            case randomNumber !== playerNumber:
                attemptPrize /= winLoseCoef;
                break;
            default:
                break;
        }
    }
} else {
    alert(`'You did not become a billionaire, but can.`);
}