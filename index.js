const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require("fs");
const path = require("path");
const distDir = path.resolve(__dirname, "output")
const generatedhtml = path.join(distDir, "team.html");
const createTeam = require('./src/generateHtml');
const team = [];


const inputData = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Insert your name',
            name: 'name',
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log('Please insert a name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Insert your ID',
            name: 'id',
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log('Please insert an ID');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Insert email',
            name: 'email',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please insert email');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Insert the office number',
            name: 'officeNumber',
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log('Please insert the office number');
                    return false;
                }
            }
        },
    ]).then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        team.push(manager);
        inputrole();
    })
   
};

const inputrole = () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'Select the role you want to introduce:',
            name: 'menu',
            choices: ['Engineer', 'Intern', 'End']
        }])
        .then(userChoice => {
            switch (userChoice.menu) {
                case "Engineer":
                    engineer();
                    break;
                case "Intern":
                    intern();
                    break;
                default:
                    buildTeam();
            }
        });
};

const engineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Insert the name of the Engineer',
            name: 'name',
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log('Please insert a name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Insert Engineer ID',
            name: 'id', 
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log('Please insert an ID');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Insert an email',
            name: 'email',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please insert an email');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Please insert a Github name',
            name: 'github',
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log('Please insert a Github name');
                    return false;
                }
            }
        }
    ]).then(input => {
        console.log(input);
        const engineer = new Engineer(input.name, input.id, input.email, input.github);
        team.push(engineer);
        inputrole();
    })
};

const intern = () => {
      return inquirer.prompt([
        {
            type: 'input',
            message: 'Insert the name of the Intern',
            name: 'name',
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log('Please insert a name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Insert Intern ID',
            name: 'id',
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log('Please insert an ID');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Insert an email',
            name: 'email',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please insert an email');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Insert the school name',
            name: 'school',
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log('Please insert a school');
                    return false;
                }
            }
        }
    ]).then(input => {
        console.log(input);
        const intern = new Intern(input.name, input.id, input.email, input.school);
        team.push(intern);
        inputrole();
    })
};

const buildTeam = () => {
    console.log("Your team is being created");
    fs.writeFileSync(generatedhtml, createTeam(team), "utf-8");
}

inputData();