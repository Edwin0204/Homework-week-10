const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require("fs");


const inputData = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Insert your name?',
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
            message: 'Insert employee ID',
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
        teamMembers.push(manager);
    })
};

inputData();