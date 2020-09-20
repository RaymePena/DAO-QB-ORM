const Manager = require('./Manager');
module.exports = class Executive extends Manager{
    constructor(fname, mname, lname, dob, phone, email, street, city, state, zip, employeeId, deparment, title, salary, spouse, dependents, directReports, bonus){
        super(fname, mname, lname, dob, phone, email, street, city, state, zip, employeeId, deparment, title, salary, spouse, dependents, directReports)
        this.bonus = bonus
    }
}