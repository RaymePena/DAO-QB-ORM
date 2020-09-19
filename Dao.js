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
        super(fname, mname, lname, dob, phone, email, street, city, state, zip, employeeId, deparment, title, salary, spouse, dependents)
        this.directReports = directReports
    }
}

class Executive extends Manager{
    constructor(fname, mname, lname, dob, phone, email, street, city, state, zip, employeeId, deparment, title, salary, spouse, dependents, directReports, bonus){
        super(fname, mname, lname, dob, phone, email, street, city, state, zip,employeeId, deparment, title, salary, spouse, dependents, directReports)
        this.bonus = bonus
    }
}

class Nonemployee extends Person{
    constructor(fname, mname, lname, dob, phone, email, street, city, state, zip){
        super(fname, mname, lname, dob, phone, email, street, city, state, zip)
    }
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
let employees = []
let managers = []
let executives = []
function generateEmployees(){
    for(let id = 16; id <= 35; id++){
        let fname = faker.name.firstName()
        let lname = faker.name.lastName()
        let mname = faker.name.firstName()
        let dob = faker.date.between('01-01-1960', '01-01-2005').toLocaleDateString()
        let phone = faker.phone.phoneNumber()
        let email = faker.internet.email()
        let street = faker.address.streetName()
        let city = faker.address.city()
        let state = faker.address.stateAbbr()
        let zip = faker.address.zipCode()
        let employeeId = faker.random.number()
        let department = faker.name.jobType()
        let title = faker.name.jobTitle()
        let salary = faker.finance.amount()
        let spouse = faker.random.boolean()
        let dependents = faker.random.boolean()

        employees.push({
            "id": id,
            "fname":fname,
            "mname":mname,
            "lname":lname,
            "dob": dob,
            "phone": phone,
            "email":email,
            "street": street,
            "city": city,
            "state": state,
            "zip": zip,
            "employeeId": employeeId,
            "department": department,
            "title": title,
            "salary": salary,
            "spouse": spouse,
            "dependents": dependents
        })
    }
 
}

function generateManagers(){
    for(let id = 36 ; id <= 41 ; id++){
        let fname = faker.name.firstName()
        let lname = faker.name.lastName()
        let mname = faker.name.firstName()
        let dob = faker.date.between('01-01-1960', '01-01-2005').toLocaleDateString()
        let phone = faker.phone.phoneNumber()
        let email = faker.internet.email()
        let street = faker.address.streetName()
        let city = faker.address.city()
        let state = faker.address.stateAbbr()
        let zip = faker.address.zipCode()
        let employeeId = faker.random.number()
        let department = faker.name.jobType()
        let title = faker.name.jobTitle()
        let salary = faker.finance.amount()
        let spouse = faker.random.boolean()
        let dependents = faker.random.boolean()
        let directReports = faker.random.boolean()

   
        managers.push({
            "id": id,
            "fname":fname,
            "mname":mname,
            "lname":lname,
            "dob": dob,
            "phone": phone,
            "email":email,
            "street": street,
            "city": city,
            "state": state,
            "zip": zip,
            "employeeId": employeeId,
            "department": department,
            "title": title,
            "salary": salary,
            "spouse": spouse,
            "dependents": dependents,
            "directReports": directReports
        })
    }
}

function generateExecutives(){
    for(let id = 42 ; id <= 44 ; id++){
        let fname = faker.name.firstName()
        let lname = faker.name.lastName()
        let mname = faker.name.firstName()
        let dob = faker.date.between('01-01-1960', '01-01-2005').toLocaleDateString()
        let phone = faker.phone.phoneNumber()
        let email = faker.internet.email()
        let street = faker.address.streetName()
        let city = faker.address.city()
        let state = faker.address.stateAbbr()
        let zip = faker.address.zipCode()
        let employeeId = faker.random.number()
        let department = faker.name.jobType()
        let title = faker.name.jobTitle()
        let salary = faker.finance.amount()
        let spouse = faker.random.boolean()
        let dependents = faker.random.boolean()
        let directReports = faker.random.boolean()
        let bonus = faker.random.number()

   
        executives.push({
            "id": id,
            "fname":fname,
            "mname":mname,
            "lname":lname,
            "dob": dob,
            "phone": phone,
            "email":email,
            "street": street,
            "city": city,
            "state": state,
            "zip": zip,
            "employeeId": employeeId,
            "department": department,
            "title": title,
            "salary": salary,
            "spouse": spouse,
            "dependents": dependents,
            "directReports": directReports,
            "bonus": bonus
        })
    }
}

generateEmployees()
generateManagers()
generateExecutives()

console.log(executives)