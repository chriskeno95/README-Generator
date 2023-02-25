// function to create licence badge for README
const createLicenceBadge = (licence) => {
  if(licence !== "none") {
    return `![Github licence](https://img.shields.io/badge/license-${licence}-blue.svg)`
  } 
  return '';
}



// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${createLicenceBadge(data.licence)}

  ### Description

  ${data.description}

  ### Table of Contents

  * [Licence](#Licence)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributing](#Contributing)
  * [Testing](#Testing)
  * [Questions](#Questions)
  
  ## Licence

  This project is Licenced under the ${data.licence} licence.

  ## Installation
  To install the necessary dependencies, run the following command:

  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage

  You must use Version 16 or above.

  ## Contributing

  To contribute all you have to do is create a Pull request on the repo

  ## Testing

  To run tests, use the following command:

  \`\`\`
  ${data.test}
  \`\`\`

  ### Questions

  If you have and questions or queries about this repository, you can open an issue, or feel free to contact me directly at ${data.email}.

  If you are interested in viewing more of my work you can visit my Github profile at [${data.github}](https://github.com/${data.github}).
`;
}

module.exports = generateMarkdown;
