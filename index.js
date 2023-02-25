const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
        {
            type: 'list',
            name: 'licence',
            message: "What kind of Licence does this project have?",
            choices: ["MIT","APACHE2.0","GPL","None"]
        },
        {
            type: 'input',
            name: 'title',
            message: "What is the name for this project?"
        },
        {
            type: 'input',
            name: 'description',
            message: "Write a short description for this project"
        },
        {
            type: 'input',
            name: 'installation',
            message: "What command should be used to install dependancies?",
            default: "npm i"
        },
        {
            type: 'input',
            name: 'test',
            message: "What command should be used to run a test",
            default: "npm test"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your email address?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is your Github username?"
        },
        
];

// function to write README file
const writeToFile = (fileName, data) => {
  // returns current working directory of the node.js process
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};

// function to initialize program
const init = () => {
  inquirer.prompt(questions)
    .then((response) => {
      console.log(`Generating README...`);
      writeToFile(`README_Template.md`, generateMarkdown({...response}));
    });
};

// function call to initialize program
init();