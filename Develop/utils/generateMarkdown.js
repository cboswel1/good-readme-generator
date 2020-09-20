// function to generate markdown for README
function generateMarkdown(data, answer) {
  return `
  
# ${data.title}

${data.description}

## Table of Contents 
${data.contents}

## Installation Instructions 
${data.installation}

## Usage Instructions
${data.usage}

## License
[${data.license}]

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions

[${data.user}](https://github.com/${data.user})
    `;
}



module.exports = generateMarkdown;
