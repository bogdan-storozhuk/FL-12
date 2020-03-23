import Employees from '../epms.js';
import UnitLeaf from '../Composite/UnitsComposite/UnitLeaf.js';
import UnitComposite from '../Composite/UnitsComposite/UnitComposite.js';

export default class UnitPopulationStrategy {

    getAvarageSalary(rmId) {
        const employes = Employees.filter(employee => employee.rm_id == rmId);
        let allSalary = 0;
        for (let index = 0; index < employes.length; index++) {
            allSalary += employes[index].salary;
        }
        return Math.floor(allSalary / employes.length);
    }

    pupulateAllUnits(unit, allEmployees) {
        const employes = allEmployees.filter(item => item.rm_id == unit.id && this.isResourceManager(item));
        employes.forEach(item => this.isEmployeeHaveResourceManagerInUnit(item.id) ?
            unit.add(new UnitComposite(item.id, item.pool_name, this.getAvarageSalary(item.id))) :
            unit.add(new UnitLeaf(item.id, item.pool_name, this.getAvarageSalary(item.id)))
        );
        const unitsThatHaveResourceManagers = unit.units.filter(item => this.isEmployeeHaveResourceManagerInUnit(item.id));
        unitsThatHaveResourceManagers.forEach(item => this.pupulateAllUnits(item, allEmployees));
    }

    isResourceManager(item) {
        return !!item.pool_name
    };
    isEmployeeHaveResourceManagerInUnit(rmId) {
        return !!Employees.find(item => item.rm_id == rmId && this.isResourceManager(item))
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
            salary = this.getAvarageSalary(topEmployee.id),
            headUnit = new UnitComposite(topEmployee.id, topEmployee.pool_name, salary),
            baseUl = document.getElementById('baseUl');
        this.pupulateAllUnits(headUnit, Employees);
        headUnit.display(baseUl);
        this.addCaretToggleListeners();
    }
}