const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require('util');

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () =>

  inquirer.prompt([
    {
        type: 'input',
        name: 'projectQuestions',
        message: 'Enter your Managers name',
    },
    {
        type: 'input',
        name: '',
        message: 'Enter your Managers Employee ID',
    },
    {
        type: 'input',
        name: '',
        message: 'Enter your Managers E-mail Address',
    }, 
    {
        type: 'input',
        name: '',
        message: 'Enter the Office Number',
    }


    // Prompts to add an engineer, add an intern, or finish building the team
    // Engineer Prompts: Engineer's Name
    // ID
    // Email
    // GitHub username

    // If Intern selection is chosen:
    //Intern’s name
    //ID
    //Email
    //School


  ]);

  // const generateHTML = (Pass Array here) => 

 /* `# **${answers.projectTitle}**

  ## **Description**
  ${answers.projectDescription}

  ## **Table of Contents**
  1. [Installation](#installation)
  2. [Usage](#usage)
  4. [Contributions](#contributions)
  5. [Tests](#tests)
  6. [FAQ](#faq)
  7. [License](#license)

  ## **Installation**
  ${answers.projectInstallation}

  ## **Usage**
  ${answers.projectUsage}

  ## **Contributions**
  ${answers.projectContribution}

  ## **Tests**
  ${answers.projectTests}

  ## **FAQ** // Add LinkedIn and E-Mail
  ${answers.projectQuestions}

  ## **License**
  ${answers.projectLicense}

  `*/
// Depending on the answer of the License, it needs to generate the License Text and Logo
// Must be easier way than storing them in an array - For ALL licenses??


/*
  promptUser()
  .then((answers) => writeFileAsync('README.md', generateREADME(answers)))
  .then(() => console.log('Successfully wrote to README.md'))
  .catch((err) => console.error(err));
*/