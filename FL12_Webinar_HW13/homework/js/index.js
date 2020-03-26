import '../src/styles.less';
import Mark from './mark.js'
class TicTacToe {
    constructor() {
        this.player1Turn = Math.random() < 0.5 ? true : false;
        this.player1State = [];
        this.player2State = [];
        this.player1Wins = 0;
        this.player2Wins = 0;
        this.isGameFinished = false;
        document.querySelector('.player').textContent = this.player1Turn ? 'Player 1' : 'Player 2';
    }

    get selectedBlockCount() {
        return this.player1State.length + this.player2State.length;
    }

    placeMark(event) {
        if (this.isGameFinished || this.selectedBlockCount >= 9) {
            this.restartGame();
            return;
        }
        if (!event.target.classList.contains('block') || event.target.hasChildNodes()) return;
        const signElement = document.createElement('div');
        if (this.player1Turn) {
            signElement.classList.add('x');
            this.player1State.push(new Mark(event.target.getAttribute('data-cell-index')));
        } else {
            signElement.classList.add('o');
            this.player2State.push(new Mark(event.target.getAttribute('data-cell-index')));
        }
        event.target.appendChild(signElement);
        if (this.selectedBlockCount >= 5) {
            this.player1Turn === true ? this.checkConditions(this.player1State) :
                this.checkConditions(this.player2State);
        }
        this.player1Turn = !this.player1Turn;
        document.querySelector('.player').textContent = this.player1Turn ? 'Player 1' : 'Player 2';
    }

    checkConditions(playerState) {
        const winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        let conditionMatch = 0;
        for (let conditionSet of winningConditions) {
            for (let condition of conditionSet) {
                for (let element of playerState) {
                    if (condition == element.getPosition()) {
                        conditionMatch++;
                    }
                }
            }
            if (conditionMatch === 3) {
                const gameResultElement = document.querySelector('.game-result');
                if (this.player1Turn) {
                    this.player1Wins++;
                    gameResultElement.textContent = 'Player1 won!!!'
                } else {
                    this.player2Wins++;
                    gameResultElement.textContent = 'Player2 won!!!'
                }
                this.updateScore();
                this.isGameFinished = true;
                return;
            } else {
                conditionMatch = 0;
            }
        }
        if (this.selectedBlockCount >= 9 && !this.isGameFinished) {
            this.player1Wins++;
            this.player2Wins++;
            this.updateScore();
            document.querySelector('.game-result').textContent = 'Its a draw!!!';
        }
    }

    restartGame() {
        let blocks = document.querySelectorAll('.block');
        for (let block of blocks) {
            block.innerHTML = '';
        }
        this.isGameFinished = false;
        this.player1Turn = Math.random() < 0.5 ? true : false;
        this.player1State = [];
        this.player2State = [];
        document.querySelector('.game-result').textContent = '';
        document.querySelector('.player').textContent = this.player1Turn ? 'Player 1' : 'Player 2';
    }

    clearScore() {
        this.player1Wins = 0;
        this.player2Wins = 0;
        this.updateScore();
    }

    updateScore() {
        document.querySelector('.player1-score').textContent = this.player1Wins;
        document.querySelector('.player2-score').textContent = this.player2Wins;
    }
}

const newGame = new TicTacToe();

document.querySelector('.game-board').addEventListener('click', (event) => newGame.placeMark(event));
document.querySelector('.new-game-button').addEventListener('click', () => {
    newGame.restartGame();
});
document.querySelector('.clear-button').addEventListener('click', () => {
    newGame.restartGame();
    newGame.clearScore();
});