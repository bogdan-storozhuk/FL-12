function Deck(){
    this.cards = [];
    let suitNames = ['hearts', 'diamonds', 'clubs', 'spades'];
    // for (let i = 0; i < suitNames.length; i++) {
    //     for (let j = 1; j <= 13; j++) {
    //         if (j > 1 && j < 11) {
    //             this.cards.push(new Card(suitNames[i], j, false))
    //         } else {
    //             this.cards.push(new Card(suitNames[i], j, true))
    //         }
    //     }
    // }
    this._count = this.cards.length;
    Object.defineProperty(this,'count',{
        get:function(){
            return this._count;
        }
    })
}
let deck=new Deck();