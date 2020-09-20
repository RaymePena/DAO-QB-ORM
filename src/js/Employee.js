const Person = require('./Person');
module.exports = class Employee extends Person{
    constructor(fname, mname, lname, dob, phone, email, street, city, state, zip, employeeId, deparment, title, salary, spouse, dependents){
        super(fname, mname, lname, dob, phone, email, street, city, state, zip);

        this.employeeId = employeeId
        this.deparment = deparment
        this.title = title
        this.salary = salary
        this.spouse = spouse
        this.dependents = dependents
    }
}

