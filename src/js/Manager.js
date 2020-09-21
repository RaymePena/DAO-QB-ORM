const Employee = require('./Employee')

module.exports = class Manager extends Employee {
    constructor(fname, mname, lname, dob, phone, email, street, city, state, zip, employeeId, deparment, title, salary, spouse, dependents, directReports){
        super(fname, mname, lname, dob, phone, email, street, city, state, zip, employeeId, deparment, title, salary, spouse, dependents);
        this.directReports = directReports
    }
}