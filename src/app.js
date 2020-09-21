const Contractor = require('./js/Contractor');
const Customer = require('./js/Customer');
const Employee = require('./js/Employee');
const Executive = require('./js/Executive');
const Manager = require('./js/Manager');
const Nonemployee = require('./js/Nonemployee');
const Person = require('./js/Person');
const Vendor = require('./js/Vendor');
let data = require('./Data/data.json');

let vendors = [];
let customers = [];
let contractors = [];
let employees = [];
let managers = [];
let executives = [];

data.forEach((d) => {
	if (d.customers !== undefined) {
		d.customers.forEach(({fname, mname, lname, dob, phone, email, street, city, state, zipcode, company}) => {
			customers.push(new Customer(fname, mname, lname, dob, phone, email, street, city, state, zipcode, company))
        });
    }
    
    if(d.employees !== undefined){
        d.employees.forEach(({fname, mname, lname, dob, phone, email, street, city, state, zip, employeeId, department, title, salary, spouse, dependents}) => {
            employees.push(new Employee(fname, mname, lname, dob, phone, email, street, city, state, zip, employeeId, department, title, salary, spouse, dependents))
        })
    }
    if(d.executives !== undefined){
        d.executives.forEach(({fname, mname, lname, dob, phone, email, street, city, state, zip, employeeId, department, title, salary, spouse, dependents, directReports, bonus}) => {
            executives.push(new Executive(fname, mname, lname, dob, phone, email, street, city, state, zip, employeeId, department, title, salary, spouse, dependents, directReports, bonus))
        })
    }
    if(d.managers !== undefined){
        d.managers.forEach(({fname, mname, lname, dob, phone, email, street, city, state, zip, employeeId, department, title, salary, spouse, dependents, directReports}) => {
            managers.push(new Manager(fname, mname, lname, dob, phone, email, street, city, state, zip, employeeId, department, title, salary, spouse, dependents, directReports))
        })
    }
    if(d.vendors !== undefined){
        d.vendors.forEach(({fname, mname, lname, dob, phone, email, street, city, state, zip, company}) => {
            vendors.push(new Vendor(fname, mname, lname, dob, phone, email, street, city, state, zip, company))
        })
    }
    if(d.contractors !== undefined){
        d.contractors.forEach(({fname, mname, lname, dob, phone, email, street, city, state, zip, company}) => {
            contractors.push(new Contractor(fname, mname, lname, dob, phone, email, street, city, state, zip, company))
        })
    }

   
});

console.log(vendors);