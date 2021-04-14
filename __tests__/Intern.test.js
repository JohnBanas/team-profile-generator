const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

jest.mock('../lib/Intern');

test('test for new role and school', () => {
  const mockNRole = 'Intern';
  const mockSchool = 'Example University'
  const intern = new Intern('John', 38, 'example@gmail.com', mockNRole, mockSchool);
  expect(intern.role).toBe(mockNRole);
  expect(intern.school).toBe(mockSchool);
});