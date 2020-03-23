import Component from './Component.js';
export default class ResourceManager extends Component {

    constructor(id, name) {
        super(id, name);
        this.developers = [];
    }

    add(developer) {
        if (!developer instanceof Component) {
            throw "wrong type, must be Component";
        }

        this.developers.push(developer);
    }

    display(ulElement) {
        let liElement = document.createElement('li'),
            spanElement = document.createElement('span'),
            innerUlElement = document.createElement('ul');

        spanElement.classList.add('caret');
        spanElement.classList.add('resource-manager');
        innerUlElement.classList.add('nested');

        spanElement.textContent = `Resource Manager - ${this.name}`;

        ulElement.appendChild(liElement);
        liElement.appendChild(spanElement);
        liElement.appendChild(innerUlElement);
        this.developers.forEach(item => item.display(innerUlElement));
    }
}