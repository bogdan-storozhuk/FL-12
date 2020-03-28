export default class Player{
    constructor(){
        this.markState = [];
        this.wins = 0
        this.turn = false;
    }
    get markedElementsCount(){
        return this.markState.length;
    }

}