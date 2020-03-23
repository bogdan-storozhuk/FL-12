import Component from './Component.js'
export default class Leaf extends Component {

    constructor(id, content) {
        super(id, content);
    }

    display(ulElement) {
        let liElement = document.createElement('li');
        liElement.textContent = this.content;
        ulElement.appendChild(liElement);
    }
}