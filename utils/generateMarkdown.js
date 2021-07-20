// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if ( license === "MIT"){
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
  } else {
  return `![License](https://img.shields.io/badge/License-${license}-orange.svg)`; 
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  ## Description 
 ${data.description}


 ## Table of Contents
  - [Installations](#installations)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#questions)

 ## Installations 

 \`\`\`

 ${data.installation}

\`\`\`

## Usage

This is the usage info: ${data.usage}

## License

${renderLicenseBadge(data.license)}

## Contributing

${data.contributing}

## Tests 

Then command to run the test case for the project are 

\`\`\`
${data.Test}
\`\`\`

 ## Questions
 
 Find me on Github at: https://github.com/${data.githubUserId}

 Email me at: ${data.email}
`;
}

module.exports = generateMarkdown;
