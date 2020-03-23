import TreePopulationManager from './TreePopulationManager.js';
import EmployeePopulationStrategy from './TreePupulationStrategies/EmployeePopulationStrategy.js';
import UnitPopulationStrategy from './TreePupulationStrategies/UnitPopulationStrategy.js';
import WarningPopulationStrategy from './TreePupulationStrategies/WarningPopulationStrategy.js';

const baseUl = document.getElementById('baseUl');

document.getElementById('showEmployeesButton').addEventListener('click', (event) => {
    baseUl.innerHTML = '';
    const treePopulationManager = new TreePopulationManager(new EmployeePopulationStrategy());
    treePopulationManager.populate();
    changeTabs(event);
});
document.getElementById('showUnitsButton').addEventListener('click', (event) => {
    baseUl.innerHTML = '';
    const treePopulationManager = new TreePopulationManager(new UnitPopulationStrategy());
    treePopulationManager.populate();
    changeTabs(event);
});
document.getElementById('showWarningEmployees').addEventListener('click', (event) => {
    baseUl.innerHTML = '';
    const treePopulationManager = new TreePopulationManager(new WarningPopulationStrategy());
    treePopulationManager.populate();
    changeTabs(event);
})

function changeTabs(event) {
    const tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove('active');
    }
    event.currentTarget.classList.add('active');
}