const Intern = require('../lib/Intern');

//test intern getSchool()
test('test intern getSchool()', () => {
  const mockSchool = 'Example University';
  const intern = new Intern('John', 38, 'example@gmail.com', mockSchool);
  expect(intern.getSchool()).toBe(`${mockSchool}`);
});

//test intern role change
test('test intern getRole()', () => {
  const mockSchool = 'Example University';
  const intern = new Intern('John', 38, 'example@gmail.com', mockSchool);
  expect(intern.getRole()).toBe('Intern');
});