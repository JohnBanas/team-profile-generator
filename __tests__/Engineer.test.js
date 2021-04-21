const Engineer = require('../lib/Engineer');

// jest.mock('../lib/Engineer');

//check engineer getGitHub()
test('check for engineer github', () => {
  const mockGit = 'JOHNBANAS';
  const engineer = new Engineer('John', 38, 'example@gmail.com', mockGit);
  expect(engineer.getGitHub()).toBe(`https://github.com/${mockGit}`);
});

//check engineer getRole()
test('check for engineer role change', () => {
  const mockGit = 'JOHNBANAS';
  const engineer = new Engineer('John', 38, 'example@gmail.com', mockGit);
  expect(engineer.getRole()).toBe('Engineer');
});
  



