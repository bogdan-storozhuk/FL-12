function Deck() {
    this.cards = [];
    let suitNames = ['hearts', 'diamonds', 'clubs', 'spades'];
    for (let i = 0; i < suitNames.length; i++) {
        for (let j = 1; j <= 13; j++) {
            if (j > 1 && j < 11) {
                this.cards.push(new Card(suitNames[i], j, false))
            } else {
                this.cards.push(new Card(suitNames[i], j, true))
            }
        }
    }
    this._count = this.cards.length;
    Object.defineProperty(this, 'count', {
        get: function () {
            return this._count;
        }
    });
}
Deck.prototype.shuffle = function () {
    let j, temporalValue;
    for (let i = 0; i < this._count; i++) {
        j = Math.floor(Math.random() * (i + 1));
        temporalValue = this.cards[i];
        this.cards[i] = this.cards[j];
        this.cards[j] = temporalValue;
    }
}
Deck.prototype.draw = function (n) {
    let drawnCards = [];
    for (let i = 0; i < n; i++) {
        drawnCards.push(this.cards.pop());
        this._count--;
    }
    return drawnCards;
}

function Card(suit, rank, isFaceCard) {
    this.suit = suit;
    this.rank = rank;
    this._isFaceCard = isFaceCard;
    Object.defineProperty(this, 'isFaceCard', {
        get: function () {
            return this._isFaceCard;
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
    this.wins = 0;
    this.deck = new Deck();
    this.deck.shuffle();
}
Player.play = function (playerOne, playerTwo) {
    while (playerOne.deck.count > 0 && playerTwo.deck.count > 0) {
        let playerOnePulledCards = playerOne.deck.draw(1),
            playerTwoPulledCards = playerTwo.deck.draw(1),
            cardComparison = Card.compare(playerOnePulledCards[0], playerTwoPulledCards[0]);
        switch (cardComparison) {
            case '>':
                playerOne.wins++;
                break;
            case '<':
                playerTwo.wins++;
                break;
            default:
        }
    }
    if (playerOne.wins > playerTwo.wins) {
        console.log(`${playerOne.name} wins ${playerOne.wins} to ${playerTwo.wins}`);
    } else {
        console.log(`${playerTwo.name} wins ${playerTwo.wins} to ${playerOne.wins}`);
    }
    playerOne.wins = 0;
    playerTwo.wins = 0;
    playerOne.deck = new Deck();
    playerTwo.deck = new Deck();
    playerOne.deck.shuffle();
    playerTwo.deck.shuffle();
}

Player.play(new Player('A-player'), new Player('B-player'));