function Deck() {
    this.cards = [];
    let suitNames = ['hearts', 'diamonds', 'clubs', 'spades'];
    for (let suitIndex = 0; suitIndex < suitNames.length; suitIndex++) {
        for (let cardRank = 1; cardRank <= 13; cardRank++) {
            this.cards.push(new Card(suitNames[suitIndex], cardRank));
        }
    }
    Object.defineProperty(this, 'count', {
        get: function () {
            return this.cards.length;
        }
    });
}
Deck.prototype.shuffle = function () {
    let randomCard, temporalValue;
    for (let cardIndex = 0; cardIndex < this.count; cardIndex++) {
        randomCard = Math.floor(Math.random() * (cardIndex + 1));
        temporalValue = this.cards[cardIndex];
        this.cards[cardIndex] = this.cards[randomCard];
        this.cards[randomCard] = temporalValue;
    }
}
Deck.prototype.draw = function (cardQuantity) {
    let drawnCards = [];
    for (let cardNumber = 0; cardNumber < cardQuantity; cardNumber++) {
        drawnCards.push(this.cards.pop());
    }
    return drawnCards;
}

function Card(suit, rank) {
    this.suit = suit;
    this.rank = rank;
    Object.defineProperty(this, 'isFaceCard', {
        get: function () {
            if (this.rank >= 1 && this.rank < 11) {
                return false;
            } else {
                return true;
            }
        }
    });
}
Card.compare = function (cardOne, cardTwo) {
    if (cardOne.rank > cardTwo.rank) {
        return '>'
    } else if (cardOne.rank < cardTwo.rank) {
        return '<'
    } else {
        return '='
    }
}

Card.prototype.toString = function () {
    let rankName;
    switch (this.rank) {
        case 1:
            rankName = 'Ace';
            break;
        case 11:
            rankName = 'Jack';
            break;
        case 12:
            rankName = 'Queen'
            break;
        case 13:
            rankName = 'King';
            break;
        default:
            rankName = this.rank;
    }
    return `${rankName} of ${this.suit}`
}

function Player(name) {
    this.name = name;
    this.deck = new Deck();
    this.deck.shuffle();
}
Player.play = function (playerOne, playerTwo) {
    let playerOneWinsNumber = 0,
        playerTwoWinsNumber = 0;
    playerOne.GetWinsNumber = () => playerOneWinsNumber;
    playerTwo.GetWinsNumber = () => playerTwoWinsNumber;
    while (playerOne.deck.count > 0 && playerTwo.deck.count > 0) {
        let playerOnePulledCards = playerOne.deck.draw(1),
            playerTwoPulledCards = playerTwo.deck.draw(1),
            cardComparison = Card.compare(playerOnePulledCards[0], playerTwoPulledCards[0]);
        switch (cardComparison) {
            case '>':
                playerOneWinsNumber++;
                break;
            case '<':
                playerTwoWinsNumber++;
                break;
            default:
        }
    }
    if (playerOne.GetWinsNumber() > playerTwo.GetWinsNumber()) {
        console.log(`${playerOne.name} wins ${playerOne.GetWinsNumber()} to ${playerTwo.GetWinsNumber()}`);
    } else {
        console.log(`${playerTwo.name} wins ${playerTwo.GetWinsNumber()} to ${playerOne.GetWinsNumber()}`);
    }
    playerOneWinsNumber = 0;
    playerTwoWinsNumber = 0;
    playerOne.deck = new Deck();
    playerTwo.deck = new Deck();
    playerOne.deck.shuffle();
    playerTwo.deck.shuffle();
}

Player.play(new Player('A-player'), new Player('B-player'));