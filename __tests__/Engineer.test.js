const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');

jest.mock('../lib/Engineer');

test('check for engineer github and role change', () => {
  const mockGit = 'JOHNBANAS';
  const mockRole = 'Engineer';

  const engineer = new Engineer('John', 38, 'example@gmail.com', mockRole, mockGit);
  expect(engineer.github).toBe(mockGit);
  expect(engineer.role).toBe(mockRole);
  console.log(engineer);
})