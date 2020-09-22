var faker = require('faker');
const Contractor = require('../js/Contractor');
const Customer = require('../js/Customer');
const Employee = require('../js/Employee');
const Executive = require('../js/Executive');
const Manager = require('../js/Manager');
const Vendor = require('../js/Vendor');

let selectDepartment = [];
let employees = [];
let managers = [];
let executives = [];
let vendorData = [];
let customerData = [];
let contractorsData = [];

function vendor() {
	for (let i = 1; i <= 5; i++) {
		let id = i;
		let fname = faker.name.firstName();
		let mname = faker.name.firstName();
		let lname = faker.name.lastName();
		let dob = new Date(faker.date.past()).toISOString().split('T')[0];
		let phone = faker.phone.phoneNumberFormat();
		let email = faker.internet.email();
		let street = faker.address.streetAddress();
		let city = faker.address.city();
		let state = faker.address.state();
		let zip = faker.address.zipCode();
		let company = faker.company.companyName();

		vendorData.push(
			new Vendor(
				fname,
				mname,
				lname,
				dob,
				phone,
				email,
				street,
				city,
				state,
				zip,
				company
			)
		);
	}
}

function customer() {
	for (let i = 6; i <= 10; i++) {
		let id = i;
		let fname = faker.name.firstName();
		let mname = faker.name.firstName();
		let lname = faker.name.lastName();
		let dob = new Date(faker.date.past()).toISOString().split('T')[0];
		let phone = faker.phone.phoneNumberFormat();
		let email = faker.internet.email();
		let street = faker.address.streetAddress();
		let city = faker.address.city();
		let state = faker.address.state();
		let zip = faker.address.zipCode();
		let company = faker.company.companyName();

		customerData.push(
			new Customer(
				fname,
				mname,
				lname,
				dob,
				phone,
				email,
				street,
				city,
				state,
				zip,
				company
			)
		);
	}
}

function contractors() {
	for (let i = 11; i <= 15; i++) {
		let id = i;
		let fname = faker.name.firstName();
		let mname = faker.name.firstName();
		let lname = faker.name.lastName();
		let dob = new Date(faker.date.past()).toISOString().split('T')[0];
		let phone = faker.phone.phoneNumberFormat();
		let email = faker.internet.email();
		let street = faker.address.streetAddress();
		let city = faker.address.city();
		let state = faker.address.state();
		let zip = faker.address.zipCode();
		let company = faker.company.companyName();

		contractorsData.push(
			new Contractor(
				fname,
				mname,
				lname,
				dob,
				phone,
				email,
				street,
				city,
				state,
				zip,
				company
			)
		);
	}
}
function generateManagers() {
	for (let id = 36; id <= 41; id++) {
		let fname = faker.name.firstName();
		let lname = faker.name.lastName();
		let mname = faker.name.firstName();
		let dob = new Date(faker.date.past()).toISOString().split('T')[0];
		let phone = faker.phone.phoneNumber();
		let email = faker.internet.email();
		let street = faker.address.streetName();
		let city = faker.address.city();
		let state = faker.address.stateAbbr();
		let zip = faker.address.zipCode();
		let employeeId = faker.random.number();
		let department = faker.name.jobType();
		let title = faker.name.jobTitle();
		let salary = faker.finance.amount(40000, 60000);
		let spouse = faker.random.boolean();
		let dependents = faker.random.boolean();
		let directReports = faker.random.boolean();
		selectDepartment.push(department);
		managers.push(
			new Manager(
				fname,
				lname,
				mname,
				dob,
				phone,
				email,
				street,
				city,
				state,
				zip,
				employeeId,
				department,
				title,
				salary,
				spouse,
				dependents,
				directReports
			)
		);
	}
}

function generateEmployees() {
	for (let id = 16; id <= 35; id++) {
		let fname = faker.name.firstName();
		let lname = faker.name.lastName();
		let mname = faker.name.firstName();
		let dob = new Date(faker.date.past()).toISOString().split('T')[0];
		let phone = faker.phone.phoneNumber();
		let email = faker.internet.email();
		let street = faker.address.streetName();
		let city = faker.address.city();
		let state = faker.address.stateAbbr();
		let zip = faker.address.zipCode();
		let employeeId = faker.random.number();
		let department = faker.random.objectElement(selectDepartment);
		let title = faker.name.jobTitle();
		let salary = faker.finance.amount();
		let spouse = faker.random.boolean();
		let dependents = faker.random.boolean();

		employees.push(
			new Employee(
				fname,
				lname,
				mname,
				dob,
				phone,
				email,
				street,
				city,
				state,
				zip,
				employeeId,
				department,
				title,
				salary,
				spouse,
				dependents
			)
		);
	}
}

function generateExecutives() {
	for (let id = 42; id <= 44; id++) {
		let fname = faker.name.firstName();
		let lname = faker.name.lastName();
		let mname = faker.name.firstName();
		let dob = new Date(faker.date.past()).toISOString().split('T')[0];
		let phone = faker.phone.phoneNumber();
		let email = faker.internet.email();
		let street = faker.address.streetName();
		let city = faker.address.city();
		let state = faker.address.stateAbbr();
		let zip = faker.address.zipCode();
		let employeeId = faker.random.number();
		let department = faker.name.jobType();
		let title = faker.name.jobTitle();
		let salary = faker.finance.amount();
		let spouse = faker.random.boolean();
		let dependents = faker.random.boolean();
		let directReports = faker.random.boolean();
		let bonus = faker.random.number();

		executives.push(
			new Executive(
				fname,
				lname,
				mname,
				dob,
				phone,
				email,
				street,
				city,
				state,
				zip,
				employeeId,
				department,
				title,
				salary,
				spouse,
				dependents,
				directReports,
				bonus
			)
		);
	}
}

contractors();
customer();
vendor();
generateManagers();
generateEmployees();
generateExecutives();

//To Write the file I did it from the command prompt. the command is node DataGenerator.js echo .> tableData.json
console.log(`{
	"vendors": ${JSON.stringify(vendorData)},
	"customers":${JSON.stringify(customerData)},
	"contractors": ${JSON.stringify(contractorsData)},
	"managers": ${JSON.stringify(managers)},
	"employees":${JSON.stringify(employees)},
	"excecutives": ${JSON.stringify(executives)}
}`);
