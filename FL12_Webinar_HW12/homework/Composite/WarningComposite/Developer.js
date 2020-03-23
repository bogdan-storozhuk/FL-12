import Component from './Component.js'
export default class Developer extends Component {

    constructor(id, name) {
        super(id, name);
    }

    display(ulElement) {
        let liElement = document.createElement('li');
        liElement.textContent = `Developer - ${this.name}`;
        ulElement.appendChild(liElement);
    }
}