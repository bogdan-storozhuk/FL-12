import '../src/styles.less';
import Mark from './mark.js'
import Player from './player.js'
class TicTacToe {
    constructor(player1, player2) {
        this.player1Turn = Math.random() < 0.5 ? true : false;
        this.player1 = player1;
        this.player2 = player2;
        this.isGameWon = false;
        document.querySelector('.player').textContent = this.player1Turn ? 'Player 1' : 'Player 2';
    }

    get selectedBlockCount() {
        return this.player1.markedElementsCount + this.player2.markedElementsCount;
    }

    isGameFinished() {
        return this.isGameWon || this.isDraw();
    }

    isDraw() {
        return this.selectedBlockCount >= 9 && !this.isGameWon;
    }

    isBlockClicked(event) {
        return !event.target.classList.contains('block') || event.target.hasChildNodes();
    }

    isMinSelectedBlocksNumberNeededToWin(blockNumber) {
        return blockNumber >= 5
    }

    placeMark(event) {
        if (this.isGameFinished()) {
            this.restartGame();
            return;
        }

        if (this.isBlockClicked(event)) return;

        const signElement = document.createElement('div');
        if (this.player1Turn) {
            signElement.classList.add('x');
            this.player1.addToMarkState(new Mark(event.target.getAttribute('data-cell-index')));
        } else {
            signElement.classList.add('o');
            this.player2.addToMarkState(new Mark(event.target.getAttribute('data-cell-index')));
        }

        event.target.appendChild(signElement);
        if (this.isMinSelectedBlocksNumberNeededToWin(this.selectedBlockCount)) {
            this.player1Turn === true ? this.checkWinningConditions(this.player1.markState) :
                this.checkWinningConditions(this.player2.markState);
        }

        this.player1Turn = !this.player1Turn;
        document.querySelector('.player').textContent = this.player1Turn ? 'Player 1' : 'Player 2';
    }

    checkWinningConditions(playerState) {
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
                for (let mark of playerState) {
                    if (condition == mark.getPosition()) {
                        conditionMatch++;
                    }
                }
            }

            if (conditionMatch === 3) {
                this.displayWinner(conditionSet);
                this.updateScore();
                this.isGameWon = true;
                return;
            } else {
                conditionMatch = 0;
            }
        }

        if (this.isDraw()) {
            this.player1.addWin();
            this.player2.addWin();
            this.updateScore();
            document.querySelector('.game-result').textContent = 'Its a draw!!!';
        }
    }

    displayWinner(winningCondition) {
        const gameResultElement = document.querySelector('.game-result');
        if (this.player1Turn) {
            this.player1.addWin();
            this.highlightWinningRow(winningCondition);
            gameResultElement.textContent = 'Player1 won!!!'
        } else {
            this.player2.addWin();
            this.highlightWinningRow(winningCondition);
            gameResultElement.textContent = 'Player2 won!!!'
        }
    }

    highlightWinningRow(conditionSet) {
        const blockElements = document.querySelectorAll('.block');
        blockElements.forEach(element => {
            if (conditionSet.includes(Number(element.getAttribute('data-cell-index')))) {
                element.classList.add('highlighted-block');
            }
        });
    }
    removeHighlight() {
        const blockElements = document.querySelectorAll('.block');
        blockElements.forEach(element => {
            if (element.classList.contains('highlighted-block')) {
                element.classList.remove('highlighted-block');
            }
        });
    }

    restartGame() {
        let blocks = document.querySelectorAll('.block');
        for (let block of blocks) {
            block.innerHTML = '';
        }

        this.removeHighlight()
        this.isGameWon = false;
        this.player1Turn = Math.random() < 0.5 ? true : false;
        this.player1.resetMarkState();
        this.player2.resetMarkState();
        document.querySelector('.game-result').textContent = '';
        document.querySelector('.player').textContent = this.player1Turn ? 'Player 1' : 'Player 2';
    }

    clearScore() {
        this.player1.resetWinsCount();
        this.player2.resetWinsCount();
        this.updateScore();
    }

    updateScore() {
        document.querySelector('.player1-score').textContent = this.player1.wins;
        document.querySelector('.player2-score').textContent = this.player2.wins;
    }
}

const newGame = new TicTacToe(new Player(), new Player());

document.querySelector('.game-board').addEventListener('click', (event) => newGame.placeMark(event));
document.querySelector('.new-game-button').addEventListener('click', () => {
    newGame.restartGame();
});
document.querySelector('.clear-button').addEventListener('click', () => {
    newGame.restartGame();
    newGame.clearScore();
});