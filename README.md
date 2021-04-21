# Software Development Team Generator

## Description

Using Node.js and the command line interface, this application allows you to dynamically create an HTML file for saving information about your software development team. The application will save, email addresses, phone numbers for managers, GitHub profiles for engineers, and any schools interns on your team may attend. The phone number, once saved, will be dynamically placed within a link which can be clicked to call the phone number provided. The GitHub profile for the Engineer is also saved as a link, and all email addresses will be saved to links that can place them in the mailto: of your default email application. 

![badge](https://img.shields.io/badge/license-MITLicense-brightorange)

You can access more badges and their purposes at [shields.io](https://shields.io)

## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Testing](#testing)
  * [Questions](#questions)
  * [License](#license)
    
    
## Installation
    
  _Follow these steps to properly install this application:_

  To use the application you will need to install npm, which will give you the dependencies for, jest (for testing), inquirer, and util. You will also need to install or have a CDN for Tailwind CSS framework.
      
## Usage

  _Instructions for use:_

  The application can be started from the command line interface, by typing 'node index'. This will begin inquirer prompting for the specific role of the employee: manager, engineer, or intern. All employees will give a name, employee id number, and email. Manager will also give an additional 'office phone number'.Engineer will give an additional GitHub username, and finally the Intern will provide the additional information of where they attend school. Once you have repeated this process to complete all the employees you would like to enter, you will simply select 'Quit application?'. This will then dynamically create the 'index.html' page. Presto! If you decide not to use the tailwind.css file and use a CDN instead, make the appropriate change to the link stylesheet dynamically created in HTML. You can do so in the App.js file located in the 'lib' folder. The video below will show the application running with link activations, including telephone number.
  
  [Team Generator Walkthrough](https://www.awesomescreenshot.com/video/3458393?key=1131b61adc1cb1b46070fb9166f5276e)
      
## Contribution

  _If you would like to contribute, please adhere to these guidelines:_

  Please feel free to reach out with any suggestions or upgrades. Also if you use this application, I would love to see it's implementation, feel free to play with the tailwind css styling! The inspiration for the Tailwind style is added to the HTML, please include this unless you change to a different framework, or create a completely different style.
      
## Testing

  _Instructions for testing application:_

  The testing is a simple process through the use of the jest dependency. Once your npm is installed and the dependencies are created, you can run 'npm test' to run all the test on the Employee, Manager, Engineer, and Intern js files. You may also enter them individually by running 'npm test Engineer' (for example). If you wish to change the code to acccept more parameters, simply create a new test within the __tests__ folder, in any of the files you wish to alter. Once you have a functioning test, feel free to implement your new code.
  I will include a video of the test files and their functionality.
  
  [Testing Video](https://www.awesomescreenshot.com/video/3458374?key=9534e37fef742cad6352a3285308b9f2)  
      
## Questions
      
  _For further questions:_

  Feel free to reach out to me to talk about the application, or if you have any questions about the testing, code, or functionality of this app.
  
  _Contact Info:_

  GitHub: [JOHNBANAS](https://github.com/JOHNBANAS)

  Email: [jbanas9124@gmail.com](mailto:jbanas9124@gmail.com)
    
## License

      
  _This application has the MIT License._
      
  For more information please view the [license description](https://choosealicense.com/licenses/mit/).
  
  