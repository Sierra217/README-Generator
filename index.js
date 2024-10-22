// TODO: Include packages needed for this application
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";
import fs from "fs";
import Choices from "inquirer/lib/objects/choices.js";
// TODO: Create an array of questions for user inputes

const questions = [
    {
        type: 'input',
        name: 'title',
        message: ('What is your project title?'),
    },
    {
        type: 'input',
        name: 'description',
        message: ('Write a short description of your project:')
    },
    {
        type: 'input',
        name: 'Contents',
        message: ('Table of contents?')
    },
    {
        type: 'input',
        name: 'installation',
        message: ('What are the steps required to install your project?'),
    },
    {
        type: 'input',
        name: 'usage',
        message: ('What is the product usage?'),
    },
    {
        type: 'input',
        name: 'license',
        message: ('What is the license?'),
        choices
    },
    {
        type: 'input',
        name: 'contributors',
        message: ('Who are the contributors in this project?'),
    },
    {
        type: 'input',
        name: 'tests',
        message: ('What are the testing instructions?'),
    },
    {
        type: 'input',
        name: 'questions',
        message: ('For questions contact:'),
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('README');
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            writeToFile('readme.md', generateMarkdown(response))
        })
}

// Function call to initialize app
init()
