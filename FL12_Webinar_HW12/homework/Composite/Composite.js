import Component from './Component.js';
export default class Composite extends Component {

    constructor(id, content) {
        super(id, content);
        this.leafs = [];
    }

    add(leaf) {
        if (!leaf instanceof Component) {
            throw "wrong type, must be Component";
        }

        this.leafs.push(leaf);
    }

    display(ulElement) {
        let liElement = document.createElement('li'),
            spanElement = document.createElement('span'),
            innerUlElement = document.createElement('ul');

        spanElement.classList.add('caret');
        spanElement.classList.add('resource-manager');
        innerUlElement.classList.add('nested');

        spanElement.textContent = `Resource Manager - ${this.content}`;

        ulElement.appendChild(liElement);
        liElement.appendChild(spanElement);
        liElement.appendChild(innerUlElement);
        this.leafs.forEach(item => item.display(innerUlElement));
    }
}