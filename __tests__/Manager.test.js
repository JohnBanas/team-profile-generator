const Manager = require('../lib/Manager');

//test for manager officeNumber
test('creates test for officeNumber', () => {
  const mockNum = 6153089631;
  const manager = new Manager('John', 38, 'example@gmail.com', mockNum);
  expect(manager.officeNumber).toBe(mockNum);
});
//role change
test('test role change for manager', () => {
  const mockNum = 6153089631;
  const manager = new Manager('John', 38, 'example@gmail.com', mockNum);
  expect(manager.getRole()).toBe('Manager');
});