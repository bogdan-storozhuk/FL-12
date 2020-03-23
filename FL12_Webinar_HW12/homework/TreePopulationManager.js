export default class TreePopulationManager {

    constructor(strategy) {
        this.strategy = strategy
    }

    populate() {
        this.strategy.execute();
    }
}