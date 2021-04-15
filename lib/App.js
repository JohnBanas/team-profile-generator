const inquirer = require('inquirer');
const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');
const util = require('util');
const fs = require('fs');

class App {
  constructor() {

    this.theLineUp = [];
    this.newEmployeePrompt = [

      {
        type: 'list',
        message: 'Please select a position on the team for the new employee, or quit the application.',
        name: 'type',
        choices: ['Manager', 'Engineer', 'Intern', 'Quit Application?']
      },
      {
        type: 'input',
        message: 'What is the name of the individual?',
        name: 'name',
        when: ({ type }) => type != 'Quit Application?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter a name.');
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
            console.log('Please enter a id.');
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
            console.log('Please enter the email address.');
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
            console.log('Please enter the manger office number.');
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
            console.log('Please enter a GitHub username.');
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
            console.log('Please enter the school attended.');
            return false;
          }
        }
      }
    ]

  }

  appInit = () => {
    this.mayISpeakToAManager();
  }

  mayISpeakToAManager = () => {
    inquirer.prompt(this.newEmployeePrompt).then(data => {
      switch (data.type) {
        case 'Manager':
          this.theLineUp.push(new Manager(data.name, data.id, data.email, data.type, data.officeNum));
          console.log(this.theLineUp);
          this.mayISpeakToAManager();
          break;
        case 'Engineer':
          this.theLineUp.push(new Engineer(data.name, data.id, data.email, data.type, data.github));
          console.log(this.theLineUp);
          this.mayISpeakToAManager();
          break;
        case 'Intern':
          this.theLineUp.push(new Intern(data.name, data.id, data.email, data.type, data.school));
          console.log(this.theLineUp);
          this.mayISpeakToAManager();
          break;
        case 'Quit Application?':
          console.log(this.theLineUp);
          hamTomMustLett(this.theLineUp);
          break;
      }
    })
  }
  
};

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, error => {
    if (error) {
      return console.log('Sorry there was an error : ' + error);
    }
  })
}

const createHTML = util.promisify(writeToFile);

async function hamTomMustLett(datData) {
  try {
    //the datData is the Array so we need to iterate through it 
    //create conditionals for the different role types 
    //based on the role types and number of employees dynamically create cards
    const data =
      `<!DOCTYPE html>
      < html >
      <head>
        <meta charset='utf-8'>
          <meta http-equiv='X-UA-Compatible' content='IE=edge'>
            <title>My Software Development Team</title>
            <meta name='viewport' content='width=device-width, initial-scale=1'>
              <link>
                <script></script>
</head>
              <body>
                <header>
                  <h1>My Team</h1>
                </header>

                <main>
                  <section>
                    <article>
                      <h2></h2>
                    </article>
                  </section>
                </main>

                <footer>

                </footer>

              </body>
</html>`
    await createHTML('dist/index.html', data);

  } catch (error) {
    console.log('Sorry there was an error:' + error);
  }
}

module.exports = App;

