var activePlayer, scores, dice, cur_score, stop;
activePlayer = 0;
document.querySelector('#Player_' + activePlayer + ' .player_name').innerHTML = 'Player ' + (activePlayer + 1) + ' &#9658;';
scores = [0, 0];
cur_score = 0;
document.querySelector('#diceImg').style.display = "none";

function playerWins(victoryPlayer) {
    document.querySelector('#diceImg').style.display = "none";
    document.querySelector('#Player_' + victoryPlayer + ' .player_name').innerHTML = 'WINNER!';
    document.querySelector('#Player_' + victoryPlayer + ' .player_name').style.color = '#ab15b3';
}

function startNewGame() {
    activePlayer = 0;
    cur_score = 0;
    scores[0] = 0;
    scores[1] = 0;
    document.querySelector('#Player_' + activePlayer + ' .player_name').innerHTML = 'Player ' + (activePlayer + 1) + ' &#9658;';
    document.querySelector('#diceImg').style.display = "none";
    document.querySelector('#cur_score0').innerHTML = 0;
    document.querySelector('#cur_score1').innerHTML = 0;
    document.querySelector('#score0').innerHTML = 0;
    document.querySelector('#score1').innerHTML = 0;
}

function animateRollingdice() {
    dice = Math.floor((Math.random() * 6)) + 1;
    document.querySelector('#diceImg').innerHTML = "<img src=\'Img\\dice" + dice + ".jpg\'>";
}
function hold() {
    scores[activePlayer] += cur_score;
    cur_score = 0;

    //    change the scores
    document.querySelector('#cur_score' + activePlayer).innerHTML = cur_score;
    document.querySelector('#score' + activePlayer).innerHTML = scores[activePlayer];
    
    if (scores[activePlayer] >= 20) {
        playerWins(activePlayer);
    } else {
    //    change the active player
        document.querySelector('#Player_' + activePlayer + ' .player_name').innerHTML = 'Player ' + (activePlayer + 1);

        activePlayer = (activePlayer === 0) ? 1 : 0;

        document.querySelector('#Player_' + activePlayer + ' .player_name').innerHTML = 'Player ' + (activePlayer + 1) + ' &#9658;';
    }
}
function stopAnimation_RestOfCode() {
    clearInterval(stop);
    //    display dice number
    document.querySelector('#diceImg').innerHTML = "<img src=\'Img\\dice" + dice + ".jpg\'>";
    
//    if dice rolled to 1
    if (dice !== 1) {
        cur_score += dice;
        document.querySelector('#cur_score' + activePlayer).innerHTML = cur_score;
    } else {
        cur_score = 0;
        hold();
    }
}
function rollDice() {
    //display the dice
    document.querySelector('#diceImg').style.display = "block";
    
    //start dice animation
    stop = setInterval(animateRollingdice, 100);
    
    //stop dice animation
    setTimeout(stopAnimation_RestOfCode, 500);
}