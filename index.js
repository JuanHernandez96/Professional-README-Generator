// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateReadMe = require('./utils/generateMarkdown');
const { denied } = require('assert');



const userInput = [
    {
        type: 'input',
        name: 'ReadMe title',
        message: "what's your Read Me title? (required)",
        validate: Title => {
            if (Title){
                return true;
            } else {
                console.log('please enter the title of your Read Me')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Username',
        message: "what's your GitHub Username? (required)",
        validate: userGit => {
            if (userGit) {
                return true;
            } else {
                console.log('Please enter your GitHub username to continue')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What's yoru email?"
    },
    {
        type: 'input',
        name: 'nameOfProject',
        message: "What's your Projects name? (required)",
        validate: projectName => {
            if (projectName) {
                return true;
            } else {
                console.log("Please enter your projects name!")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'descriptionOfProject',
        message: "what's your projects description",
        validate: proDescription => {
            if (proDescription) {
                return true;
            } else {
                console.log('Please enter your projects description!')
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'licenseType',
        message: "what license do you want to use? (use arrow keys to move up and down and space to select)",
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'NONE'],
    },
    {
        type: 'input',
        name: 'install command',
        message: 'what command should run to install dependencies',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'information',
        message: "what does the user need to know about this repository",
    }
]
inquirer.prompt(userInput)
.then(answers => {console.log(answers)
writeToFile('./dist/readme.md', generateReadMe(answers))
});



// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw err;
        return;
    })
}

// TODO: Create a function to initialize app
function init() {


    
}

// Function call to initialize app
init();
