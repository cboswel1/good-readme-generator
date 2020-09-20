const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generate = require('./generateMarkdown');

const writeReadFile = util.promisify(fs.writeFile);

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
        "CSS", 
        "JavaScript", 
        "MySQL"
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
      message: "Questions: ",
      name: "questions"
    }
]);
}


// function to write README file

function writeToFile(fileName, data) {
}



// function to initialize program
async function init() {
  console.log("hi")
  try {
    const answer = await promptUser();

    const md = generateMd(answer);

    await writeReadFile("README.md", md);

    console.log("Successfully wrote to README.md");
  } catch(err) {
    console.log(err);
  }

}

// function call to initialize program
init();
