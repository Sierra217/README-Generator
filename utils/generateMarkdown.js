// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge;
    if (license === 'MIT') {
      licenseBadge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)(https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache 2.0') {
      licenseBadge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)(https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'BSD3') {
      licenseBadge = '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)(https://opensource.org/licenses/BSD-3-Clause)';
  } else {
      licenseBadge = '';
  }
  return licenseBadge;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents 
  [Installation](#Installation)
  [Usage](#Usage)
  [License](#License)
  [Contributors](#Contributors)
  [Tests](#Tests)
  [Questions](#Questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${data.license}
  ## Contributors
  ${data.contributors}
  ## Tests
  ${data.tests}
  ## Questions
  ${data.questions}
`;
}

export default generateMarkdown;
