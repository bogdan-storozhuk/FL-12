import '../src/styles.less';
import Paper from './paper.js';
import Rock from './rock.js';
import Scissors from './scissors.js';

const rockButton = document.querySelector('.game__button--rock'),
    paperButton = document.querySelector('.game__button--paper'),
    scissorsButton = document.querySelector('.game__button--scissors'),
    resetButton = document.querySelector('.game__button--reset'),
    winsElement = document.querySelector('.game__wins'),
    lossesElement = document.querySelector('.game__losses'),
    drawsElement = document.querySelector('.game__draws'),
    roundElement = document.querySelector('.game__round');


class RockPaperScissors {
    constructor() {
        this.roundCount = 0;
        this.wins = 0;
        this.draws = 0;
        this.losses = 0;
    }
    getOpponentChoise() {
        const choicesNumber = 3,
            chosenNumber = Math.floor(Math.random() * Math.floor(choicesNumber));
        switch (chosenNumber) {
            case 0:
                return new Paper();
            case 1:
                return new Rock();
            default:
                return new Scissors();
        }
    }
    resetScore() {
        this.roundCount = 0;
        this.wins = 0;
        this.draws = 0;
        this.losses = 0;
        winsElement.textContent = this.wins;
        lossesElement.textContent = this.draws;
        drawsElement.textContent = this.losses;
    }
    showRoundResultMessage(roundOutcome, playerChoice, opponentChoice) {
        roundElement.textContent = `Round ${this.roundCount},  ${playerChoice.toString()} vs. ${opponentChoice.toString()}, You’ve ${roundOutcome}!`;
    }

    showFinalResult() {
        if (this.wins > this.losses) {
            roundElement.textContent = `You've won the whole game!`
        } else if (this.wins < this.losses) {
            roundElement.textContent = `You've lost the whole game!`
        } else {
            roundElement.textContent = `WOW! You've drew with the other player!`
        }
        setTimeout(() => {
            this.resetScore()
        }, 1000);
    }

    updateScore(roundOutcome) {
        switch (roundOutcome) {
            case 'WON':
                this.wins++;
                winsElement.textContent = this.wins;
                break;
            case 'LOST':
                this.losses++;
                lossesElement.textContent = this.losses;
                break;
            default:
                this.draws++;
                drawsElement.textContent = this.draws;
        }
    }
    playRound(playerChoice) {
        let opponentChoice = this.getOpponentChoise(),
            roundOutcome = playerChoice.compare(opponentChoice);
        this.roundCount++;
        this.updateScore(roundOutcome);
        if (this.roundCount > 2) {
            this.showFinalResult()
        } else {
            this.showRoundResultMessage(roundOutcome, playerChoice, opponentChoice);
        }
    }
}

let rockPaperScissors = new RockPaperScissors();
console.log(rockPaperScissors);

paperButton.addEventListener('click', () => {
    rockPaperScissors.playRound(new Paper());
});
rockButton.addEventListener('click', () => {
    rockPaperScissors.playRound(new Rock());
});
scissorsButton.addEventListener('click', () => {
    rockPaperScissors.playRound(new Scissors());
});
resetButton.addEventListener('click', () => {
    rockPaperScissors.resetScore();
})