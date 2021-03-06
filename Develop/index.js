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
      name: "title", 
      validate: function (answer) {
        if (answer.length < 1) {
            return console.log("A valid title is required.");
        }
        return true;
        }
    },
    {
      type: "input",
      message: "Project description:",
      name: "description",
      validate: function (answer) {
        if (answer.length < 1) {
            return console.log("A valid description is required.");
        }
        return true;
        }
    },
    {
      type: "input",
      message: "Installation instructions: ",
      name: "installation",
      validate: function (answer) {
        if (answer.length < 1) {
            return console.log("n/a");
        }
        return true;
        }
    }, 
    {
      type: "input",
      message: "Usage instructions: ",
      name: "usage",
      validate: function (answer) {
        if (answer.length < 1) {
            return console.log("n/a");
        }
        return true;
        }
    }, 
    {
      type: "list",
      message: "License: ",
      name: "license",
      choices: ["MIT", "GNUv3.0", "MPL2.0", "Unlicense"]
    },
    {
      type: "list",
      message: "License Agreement: ",
      name: "printLicense",
      choices: ["mitlicense.txt", "gnu.txt", "mozilla.txt", "theunlicense.txt"]
    },
    {
      type: "input",
      message: "Contributing: ",
      name: "contributing", 
    },
    {
      type: "input",
      message: "Tests: ",
      name: "tests", 
    },
    {
      type: "input",
      message: "GitHub username: ",
      name: "user", 
      validate: function (answer) {
        if (answer.length < 1) {
            return console.log("Please enter your GitHub username");
        }
        return true;
        }
    },
    {
    type: "input",
      message: "E-mail address: ",
      name: "email", 
      validate: function (answer) {
        if (answer.length < 1) {
            return console.log("Please enter a valid email address");
        }
        return true;
        }
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

    // User will have README.md also open in their preferred editor 
    .then(function (res) {
        console.log("working");
        open("README.md"); 
    })

    .catch(function (err) {
        console.log(err);
    });

