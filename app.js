const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

newEmployeePrompt = () => {
  inquirer
    .prompt(
      {
        type: 'list',
        name: 'type',
        message: 'What is your role in the team?',
        choices: ['Manager', 'Engineer', 'Intern', 'Quit Application']
      }
    )
}

newEmployeePrompt();