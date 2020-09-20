// function to generate markdown for README
function generateMarkdown(data, answer) {
  return `
  
# ${answer.title}

${answer.description}

## Table of Contents 
${answer.contents}

## Installation Instructions 
${answer.installation}

## Usage Instructions
${answer.usage}

## License
[${answer.license}]

## Contributing
${answer.contributing}

## Tests
${answer.tests}

## Questions
${answer.questions}
    `;
}



module.exports = generateMarkdown;
