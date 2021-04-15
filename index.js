//calling App.js from lib folder to run inquirer prompts
const App = require('./lib/App');
//create new instance of application to clear previous employee array 
//and make new HTML 
const app = new App();
//Initializes the application 
app.appInit();