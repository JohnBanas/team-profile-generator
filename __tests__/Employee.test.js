//require the function of Employee() from lib
const Employee = require('../lib/Employee');

//mock info for testing
jest.mock('../lib/Employee');

//check the values of new Employee()
console.log(new Employee());

//create a Employee object
test('creates a employee object', () => {
  const employee = new Employee('John');

  expect(employee.name).toBe('John');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});