import Component from './Component.js'
export default class UnitComposite extends Component {

    constructor(id, name, salary) {
        super(id, name, salary);
        this.units = [];
    }

    add(unit) {
        if (!unit instanceof Component) {
            throw "wrong type, must be Component";
        }

        this.units.push(unit);
    }

    display(ulElement) {
        let liElement = document.createElement('li'),
            spanElement = document.createElement('span'),
            innerUlElement = document.createElement('ul');

        spanElement.classList.add('caret');
        innerUlElement.classList.add('nested');

        spanElement.textContent = `${this.name}, average salary:$${this.salary}`;

        ulElement.appendChild(liElement);
        liElement.appendChild(spanElement);
        liElement.appendChild(innerUlElement);
        this.units.forEach(item => item.display(innerUlElement));
    }
}