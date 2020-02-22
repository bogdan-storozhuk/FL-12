class Employee {
    constructor({
        id,
        firstName,
        lastName,
        birthday,
        salary,
        position,
        department
    }) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.salary = salary;
        this.position = position;
        this.department = department;
        this.age = this.calculateAge(birthday);
        this.fullName = `${this.firstName} ${this.lastName}`;
        Employee.EMPLOYEES.push(this);
    }

    calculateAge(DOB) {
        var today = new Date();
        var birthDate = new Date(DOB);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age = age - 1;
        }
        return age;
    }
    quit() {
        let employeeIndex=Employee.EMPLOYEES.findIndex(element=>element.id===this.id);
        Employee.EMPLOYEES.splice(employeeIndex,1);
    }
    retire() {
        let employeeIndex=Employee.EMPLOYEES.findIndex(element=>element.id===this.id);
        Employee.EMPLOYEES.splice(employeeIndex,1);
        console.log('It was such a pleasure to work with you!');
    }
    getFired() {
        let employeeIndex=Employee.EMPLOYEES.findIndex(element=>element.id===this.id);
        Employee.EMPLOYEES.splice(employeeIndex,1);
        console.log('Not a big deal!');
    }
    changeDepartment(newDepartment) {
        this.department = newDepartment;
    }
    changePosition(newPosition) {
        this.position = newPosition;
    }
    changeSalary(newSalary) {
        this.salary = newSalary;
    }
    getPromoted({
        salary,
        position,
        department
    }) {
        if (salary) {
            this.changeSalary(salary);
        }
        if (position) {
            this.changePosition(position);
        }
        if (department) {
            this.changeDepartment(department);
        }
        console.log('Yoohooo!')
    }
    getDemoted({
        salary,
        position,
        department
    }) {
        if (salary) {
            this.changeSalary(salary);
        }
        if (position) {
            this.changePosition(position);
        }
        if (department) {
            this.changeDepartment(department);
        }
        console.log('Damn!')
    }
}
Employee.EMPLOYEES = [];

class Manager extends Employee {
    constructor({
        id,
        firstName,
        lastName,
        birthday,
        salary,
        department
    }) {
        super({
            id,
            firstName,
            lastName,
            birthday,
            salary,
            position: 'manager',
            department
        })
    }
    get managedEmployees() {
       let filterEmployees=Employee.EMPLOYEES.filter(element=>element.department===this.department);
        return filterEmployees;
    }
}

class BlueCollarWorker extends Employee {
    constructor({
        id,
        firstName,
        lastName,
        birthday,
        salary,
        position,
        department
    }) {
        super({
            id,
            firstName,
            lastName,
            birthday,
            salary,
            position,
            department
        })
    }
}

class HRManager extends Manager {
    constructor({
        id,
        firstName,
        lastName,
        birthday,
        salary,
    }) {
        super({
            id,
            firstName,
            lastName,
            birthday,
            salary,
            department: 'hr'
        })
    }
}

class SalesManager extends Manager {
    constructor({
        id,
        firstName,
        lastName,
        birthday,
        salary,
    }) {
        super({
            id,
            firstName,
            lastName,
            birthday,
            salary,
            department: 'sales'
        })
    }
}

const promoter = () => ({
    promote(managedEmployee, newPosition) {
        managedEmployee.position = newPosition;
    }
});

function ManagerPro(manager) {
    Object.assign(manager, promoter());
}

let salesManager1 = new SalesManager({
    id: 1,
    firstName: 'Bogdan',
    lastName: 'Storozhuk',
    birthday: '02/02/1996',
    salary: 3500
});
let salesManager2 = new SalesManager({
    id: 2,
    firstName: 'kek',
    lastName: 'kekw',
    birthday: '02/02/1996',
    salary: 3500
});
let hrManager1= new HRManager({
    id: 3,
    firstName: 'me',
    lastName: ':)',
    birthday: '02/02/1996',
    salary: 3500
});
ManagerPro(salesManager1);
salesManager1.promote(salesManager2, 'test');
// console.log(salesManager1);
// console.log(salesManager2);
// console.log(Employee.EMPLOYEES);
// console.log(salesManager1.managedEmployees);