class Person{
    constructor(fname, mname, lname, dob, phone, email, street, city, state, zip){
        this.fname = fname
        this.mname = mname
        this.lname = lname
        this.dob = dob
        this.phone = phone
        this.email = email
        this.street = street
        this.city = city
        this.state = state
        this.zip = zip
    }
}

class Employee extends Person{
    constructor(fname, mname, lname, dob, phone, email, street, city, state, zip, employeeId, deparment, title, salary, spouse, dependents){
        super(fname, mname, lname, dob, phone, email, street, city, state, zip)
        this.employeeId = employeeId
        this.deparment = deparment
        this.title = title
        this.salary = salary
        this.spouse = spouse
        this.dependents = dependents
    }
}

class Manager extends Employee{
    constructor(fname, mname, lname, dob, phone, email, street, city, state, zip, employeeId, deparment, title, salary, spouse, dependents, directReports){
        super(fname, mname, lname, dob, phone, email, street, city, state, zip)
        this.directReports = directReports
    }
}

class Executive extends Manager{
    constructor(fname, mname, lname, dob, phone, email, street, city, state, zip, employeeId, deparment, title, salary, spouse, dependents, directReports, bonus){
        super(fname, mname, lname, dob, phone, email, street, city, state, zip)
        this.bonus = bonus
    }
}

class Nonemployee extends Person{
    constructor(fname, mname, lname, dob, phone, email, street, city, state, zip)
    super(fname, mname, lname, dob, phone, email, street, city, state, zip)
}

class Contractor extends Nonemployee{
    constructor(fname, mname, lname, dob, phone, email, street, city, state, zip, company){
        super(fname, mname, lname, dob, phone, email, street, city, state, zip)
        this.company = company
    }
}

class Vendor extends Nonemployee{
    constructor(fname, mname, lname, dob, phone, email, street, city, state, zip, company){
        super(fname, mname, lname, dob, phone, email, street, city, state, zip)
        this.company = company
    }
}

class Customer extends Nonemployee{
    constructor(fname, mname, lname, dob, phone, email, street, city, state, zip, company){
        super(fname, mname, lname, dob, phone, email, street, city, state, zip)
        this.company = company
    }
}

var faker = require('faker');
var fs = require('fs')

function generatePerson(){
    let person = []
    for(let id = 1; id <= 5; id++){
        let fname = faker.name.firstName()
        let lname = faker.name.lastName()
        let mname = faker.name.firstName()


    }
}
