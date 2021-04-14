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
        choices: ['Manager', 'Engineer', 'Intern', 'Quit Application?']
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the individual?',
        when: ({ type }) => type != 'Quit Application?',
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is the ID number of the individual?',
        when: ({ type }) => type != 'Quit Application?',
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the email address of the individual?',
        when: ({ type }) => type != 'Quit Application?',
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'officeNum',
        message: 'What is the office number of the manager?',
        when: ({ type }) => type === 'Manager',
        validate: (officeNumInput) => {
          if (officeNumInput) {
            return true;
          } else {
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is the GitHub username of the engineer?',
        when: ({ type }) => type === 'Engineer',
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'school',
        message: 'What is the name of the school the intern attends?',
        when: ({ type }) => type === 'Intern',
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          } else {
            return false;
          }
        }
      }
    )
}

newEmployeePrompt();