if (confirm('Do you want to play a game?')) {
    const initialMaxNumber = 9,
        initialMaxPrize = 100,
        numberAddend = 4,
        prizeСhangeNumber = 2;
    let maxNumber = initialMaxNumber,
        winningNumber,
        selectedNumber,
        moneyWon = 0,
        maxPrize = initialMaxPrize,
        possiblePrize,
        keepPlaying = true,
        isFirstGame = true,
        message;
    while (keepPlaying) {
        if (!isFirstGame) {
            maxNumber += numberAddend;
            maxPrize *= prizeСhangeNumber;
        }
        if (isFirstGame) {
            isFirstGame = false;
        }
        winningNumber = Math.floor(Math.random() * maxNumber);
        possiblePrize = maxPrize;
        for (let attemptCount = 3; attemptCount > 0; attemptCount--) {
            message = `Choose a roulette pocket number from 0 to ${maxNumber-1}\n`;
            message += `Attemps left: ${attemptCount}\n`;
            message += `Total prize: ${moneyWon}$\n`;
            message += `Possible prize on current attempt: ${possiblePrize}`;
            selectedNumber = Number.parseInt(prompt(message));
            if (selectedNumber === winningNumber) {
                moneyWon += possiblePrize;
                message = `Congratulation, you won!   Your prize is: ${moneyWon} $.`;
                message += 'Do you want to continue?'
                keepPlaying = confirm(message);
                if (!keepPlaying) {
                    alert(`Thank you for your participation. Your prize is: ${moneyWon} $`);
                    keepPlaying = confirm('Want to restart?');
                    maxNumber = initialMaxNumber;
                    moneyWon = 0;
                    maxPrize = initialMaxPrize;
                    isFirstGame = true;
                }
                break;
            } else if (attemptCount === 1) {
                alert(`Thank you for your participation. Your prize is: ${moneyWon} $`);
                keepPlaying = confirm('Want to restart?');
                maxNumber = initialMaxNumber;
                moneyWon = 0;
                maxPrize = initialMaxPrize;
                isFirstGame = true;
                break;
            } else {
                possiblePrize /= prizeСhangeNumber;
            }
        }
    }
} else {
    alert('You did not become a billionaire, but can.');
}