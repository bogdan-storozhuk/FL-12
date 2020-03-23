import Employees from '../epms.js';
import ResourceManager from '../Composite/EmployeesComposite/ResourceManager.js';
import Developer from '../Composite/EmployeesComposite/Developer.js';

export default class EmployeePopulationStrategy {

    pupulateAllEmployees(resourceManager, allEmployees) {
        const employes = allEmployees.filter(item => item.rm_id == resourceManager.id);
        employes.forEach(item => this.isResourceManager(item) ?
            resourceManager.add(new ResourceManager(item.id, item.name, item.pool_name)) :
            resourceManager.add(new Developer(item.id, item.name)));

        const resourceManagers = resourceManager.developers.filter(item => this.isResourceManager(item));
        resourceManagers.forEach(item => this.pupulateAllEmployees(item, allEmployees));
    }

    isResourceManager(item) {
        return !!item.pool_name
    };

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
        const topEmployee = Employees.find(item => item.rm_id === null),
            headResourceManager = new ResourceManager(topEmployee.id, topEmployee.name, topEmployee.pool_name),
            baseUl = document.getElementById('baseUl');
        this.pupulateAllEmployees(headResourceManager, Employees);
        headResourceManager.display(baseUl);
        this.addCaretToggleListeners();
    }

}