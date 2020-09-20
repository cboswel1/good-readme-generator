const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generate = require("./utils/generateMarkdown");
const open = require("open");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title"
    },
    {
      type: "input",
      message: "Project description:",
      name: "description"
    },
    {
      type: "input",
      message: "Table of Contents:",
      name: "contents"
    }, 
    {
      type: "input",
      message: "Installation instructions: ",
      name: "installation"
    }, 
    {
      type: "input",
      message: "Usage instructions: ",
      name: "usage"
    }, 
    {
      type: "checkbox",
      message: "License: ",
      name: "license",
      choices: [
        "MIT", 
        "Mozilla Public License 2.0", 
        "Boost Software License 1.0", 
        "The Unlicense"
      ]
    },
    {
      type: "input",
      message: "Contributing: ",
      name: "contributing"
    },
    {
      type: "input",
      message: "Tests: ",
      name: "tests"
    },
    {
      type: "input",
      message: "GitHub username: ",
      name: "user"
    }
]);
}



// function to initialize program
let userResponse = {}
promptUser()
    .then(function (answer) {
    userResponse = answer; 

    
    })


    .then(function(answer) {
    
        const md = generate(userResponse, answer);
        return writeFileAsync("README.md", md);

    })

    .then(function (res) {
        console.log("working");

        open("README.md"); 
    })

    .catch(function (err) {
        console.log(err);
    });


