import Employees from '../epms.js';
import ResourceManager from '../Composite/WarningComposite/ResourceManager.js';
import Developer from '../Composite/WarningComposite/Developer.js';

export default class WarningPopulationStrategy {

    pupulateAllEmployees(resourceManager) {
        Employees.forEach(item => {
            if (item.performance === 'low') {
                resourceManager.add(new Developer(item.id, item.name))
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
            const headResourceManager = new ResourceManager(999, 'Warning employees'),
            baseUl = document.getElementById('baseUl');
        this.pupulateAllEmployees(headResourceManager, Employees);
        headResourceManager.display(baseUl);
        this.addCaretToggleListeners();
    }

}