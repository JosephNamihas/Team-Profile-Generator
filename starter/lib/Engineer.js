// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");
class Engineer extends Employee {
    constructor(gitHub){
        this.gitHub = gitHub;
    }

    getGitHub() {};
    getRole() {}; // Overide to return Engineer
};

module.exports = Engineer;