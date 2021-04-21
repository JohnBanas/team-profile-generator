//require the function of Employee() from lib
const Employee = require('../lib/Employee');

// //mock info for testing
// jest.mock('../lib/Employee');

//check the values of new Employee()
// console.log(new Employee());

//create a Employee object and test name, id, email then prototypes within
test('creates a employee object and test if name is equal to a string', () => {
  const employee = new Employee('John', 34, 'example@gamil.com');
  expect(employee.name).toEqual(expect.any(String));
});

test('test if employee.id equals a number', () => {
  const employee = new Employee('John', 34, 'example@gamil.com');
  expect(employee.id).toEqual(expect.any(Number));
});

test('test is employee.email equals a string', () => {
  const employee = new Employee('John', 34, 'example@gmail.com');
  expect(employee.email).toEqual(expect.any(String));
});

//test getName()
test('test the getName() function in Employee', () => {
  const employee = new Employee('John', 34, 'example@gmail.com');
  expect(employee.getName()).toEqual(expect.any(String));
});

//test getId()
test('test the getId() function in Employee', () => {
  const employee = new Employee('John', 34, 'example@gmail.com');
  //this will return as a string once passed through as the object parameter, not a number
  expect(employee.getId()).toEqual(expect.any(String));
});

//test getEmail()
test('test the getEmail() function in Employee', () => {
  const employee = new Employee('John', 34, 'example@gmail.com');
  expect(employee.getEmail()).toEqual(expect.any(String));
});

//test getRole()
test('test the getRole() function in Employee', () => {
  const employee = new Employee('John', 34, 'example@gmail.com');
  expect(employee.getRole()).toBe('Employee');
});
  


// let testVal = "1";
// const emp = new Employee("sally", testVal, "a@a.com");

// expect(employee.getId()).toBe("1");

