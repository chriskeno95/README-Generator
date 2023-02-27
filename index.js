//allows you to work with the file system on your computer
const fs = require("fs");

//The Path module provides a way of working with directories and file paths
const path = require('path');

//The require method lets your application know that it needs to use the inquirer package to execute the code below.
const inquirer = require("inquirer");

//imports the file generateMarkdown and its data
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
      //creates file called `README_Template.md` or rewrite it if already present
      writeToFile(`README_Template.md`, generateMarkdown({...response}));
    });
};

// function call to initialize program
init();