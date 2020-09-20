const Person = require('./Person');
module.exports = class Nonemployee extends Person{
    constructor(fname, mname, lname, dob, phone, email, street, city, state, zip){
        super(fname, mname, lname, dob, phone, email, street, city, state, zip);
    }
}
