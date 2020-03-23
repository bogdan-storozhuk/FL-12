import Employees from '../epms.js';
import Composite from '../Composite/Composite.js';
import Leaf from '../Composite/Leaf.js';

export default class WarningPopulationStrategy {

    pupulateAllEmployees(compositeElement) {
        Employees.forEach(item => {
            if (item.performance === 'low') {
                compositeElement.add(new Leaf(item.id, item.name))
            }
        });
    }

    addCaretToggleListeners() {
        const toggler = document.getElementsByClassName("caret");
        for (let index = 0; index < toggler.length; index++) {
            toggler[index].addEventListener("click", function () {
                this.parentElement.querySelector(".nested").classList.toggle("active");
                this.classList.toggle("caret-down");
            });
        }
    }

    execute() {
        const compositeElement = new Composite(0, 'Warning employees'),
            baseUl = document.getElementById('baseUl');
        this.pupulateAllEmployees(compositeElement);
        compositeElement.display(baseUl);
        this.addCaretToggleListeners();
    }

}