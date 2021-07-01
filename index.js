// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        input: "type",
        message: "Please enter the Project Title"
    },
    {
        name: "description",
        input: "type",
        message: "Please enter the description for your Project"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(response => {
        console.log("user answers", response); 
        //convert int oa redme friendly format 
        console.log(generateMarkdown(response));
    })
 }

// Function call to initialize app
init();
