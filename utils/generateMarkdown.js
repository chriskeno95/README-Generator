// function to create licence badge for README
const createLicenceBadge = (licence) => {
  if(licence !== "none") {
    return `![Github licence](https://img.shields.il/badge/license-${licence}-blue.svg)`
  } 
  return '';
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${createLicenceBadge(data.licence)}

`;
}

module.exports = generateMarkdown;
