const Nonemployee = require('./NonEmployee');

module.exports = class Contractor extends Nonemployee{
    constructor(fname, mname, lname, dob, phone, email, street, city, state, zip, company){
        super(fname, mname, lname, dob, phone, email, street, city, state, zip);
        this.company = company

    }
}