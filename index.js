// TODO: Include packages needed for this application
const inquirer = require('inquirer'); 
const fs = require('fs'); 
const generateMarkdown = require('./utils/generateMarkdown'); 

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input', 
        name: 'title', 
        message: 'What is the name of your project?', 
        validate: project_nameInput => {
            if (project_nameInput) {
                return true; 
            } else{
                console.log('Please enter a project name'); 
                return false; 
            }
        }
    }, 
    {
        type: 'input', 
        name: 'project_desc', 
        message: 'What is your project about? Give us a brief decription.', 
        validate: project_descInput => {
            if (project_descInput) {
                return true; 
            } else {
                console.log('Please give a brief desciption'); 
                return false; 
            }
        }
    }, 
    {
        type: 'input', 
        name: 'installation', 
        message: 'How do users install/use your project?', 
        validate: intallationInput => {
            if (intallationInput) {
                return true; 
            } else {
                console.log('Please include usage/installtion instructions'); 
                return false; 
            }
        }
    }, 
    {
        type: 'input', 
        name: 'credits', 
        message: 'Who are your contributors? List any third-party credits.', 
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    generateMarkdown(data)
        .then()
}

// TODO: Create a function to initialize app
function init() {
    return inquirer
        .prompt(questions)
        .then(writeToFile(data.title, data))
}

// Function call to initialize app
init();
