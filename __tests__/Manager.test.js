const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

jest.mock('../lib/Manager');

test('creates test for officeNumber', () => {
  const mockNum = 6153089631;
  const mockRole = 'Manager'
  const manager = new Manager('John', 38, 'example@gmail.com', mockRole, mockNum);
  expect(manager.officeNumber).toBe(mockNum);
  expect(manager.role).toBe(mockRole);
})