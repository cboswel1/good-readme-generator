const Choices = require("inquirer/lib/objects/choices");

// function to generate markdown for README
function generateMarkdown(data, answer) {
  return `
  
# ${data.title};

[]


${data.description}

## Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

## Installation 
${data.installation}

## Usage
${data.usage}

## License
This project is licensed by ${data.license} 

## Contributing
${data.contributing}

## Tests
${data.tests}
 
## Questions

[Github profile}](https://github.com/${data.user})

[E-Mail](mailto:${data.email})
    `;
}



module.exports = generateMarkdown;
