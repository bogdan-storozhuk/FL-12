export default class Player {
    constructor() {
        this._markState = [];
        this._wins = 0
    }
    get markedElementsCount() {
        return this._markState.length;
    }
    get markState() {
        return this._markState;
    }
    get wins() {
        return this._wins;
    }
    addToMarkState(mark) {
        this._markState.push(mark);
    }
    addWin() {
        this._wins++;
    }
    resetMarkState() {
        this._markState = [];
    }
    resetWinsCount() {
        this._wins = 0;
    }
}