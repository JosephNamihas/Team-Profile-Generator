// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");
class Manager extends Employee {
    constructor(officeNumber){
        this.officeNumber = officeNumber;
    }

    getRole() {}; // Override to Return Manager
}

module.exports = Manager;