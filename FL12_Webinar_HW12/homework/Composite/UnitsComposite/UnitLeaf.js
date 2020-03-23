import Component from './Component.js'
export default class UnitLeaf extends Component {

    constructor(id, name, salary) {
        super(id, name, salary);
    }

    display(ulElement) {
        let liElement = document.createElement('li');
        liElement.textContent = `${this.name}, average salary:$${this.salary}`;
        ulElement.appendChild(liElement);
    }
}