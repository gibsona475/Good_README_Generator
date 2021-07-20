// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const { type } = require("os");
// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        type: "input",
        message: "Please enter the Project Title"
    },
    {
        name: "description",
        type: "input",
        message: "Please enter the description for your Project"
    },
    {
        name: "githubUserId",
        type: "input",
        message: "Enter your GitHub Id"
    },
    {
        name: "email",
        type: "input",
        message: "Enter your email",
    
    },
    {
        name: "usage",
        type: "input",
        message: "Enter the usage for your project",
    
    },
    {
        name: "contributing",
        type: "input",
        message: "Enter your contributions",
    
    },
    {
        name: "Test",
        type: "input",
        message: "Enter your command to run test cases",
    
    },
    {
        name: "installation",
        type: "input",
        message: "Please enter the commannd to install dependencies for the project",
        default: "npm install"
    },
    {
        name: "license",
        type: "list",
        message: "select your prefered license",
        choices: ['MIT', 'GNU', 'ISC','Apache'],
    },

    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    // console.log("Inside function", fileName);
    fs.writeFile(fileName, data, function (err) {
        if (err) return console.log(err);
        console.log(`Generated ${fileName} succesfully !!`);
      });
}

// TODO: Create a function to initialize app
function init() {
    console.log("Starting the program ........"); 
    inquirer.prompt(questions)
    .then(response => {
         console.log("user answers", response); 
        //convert int oa redme friendly format 
        // console.log(generateMarkdown(response));
        writeToFile("SampleReadME.md", generateMarkdown(response));
    })
 }

// Function call to initialize app
init();
