const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
        {
            type: 'input',
            name: 'licence',
            message: ""
        },
        {
            type: 'input',
            name: 'title',
            message: ""
        },
        {
            type: 'input',
            name: 'description',
            message: ""
        },
        {
            type: 'input',
            name: 'installation',
            message: ""
        },
        {
            type: 'input',
            name: 'test',
            message: ""
        },
        {
            type: 'input',
            name: 'usage',
            message: ""
        },
        {
            type: 'input',
            name: 'contributing',
            message: ""
        },
        {
            type: 'input',
            name: 'email',
            message: ""
        },
        
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
