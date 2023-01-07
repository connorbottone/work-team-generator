const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const inquirer = require("inquirer");
const path = require("path");
const fs = require('fs')
// 1.
// import manager, engineer, intern files with require()
// import inquirer with require()
// import path with require()
// import fs with require()

// 2.
// import page-template.js from subfoler src with require and assign it to a variable to be called later to render html
const template = require("./src/page-template");
const Employee = require("./lib/Employee");
// 3.
// create variable to hold the path to dist subfolder using path lib resolve method
// create variable to hold the path to team.html using path lib join method

// 4.
// create an empty employee memeber array variable to store the employee members, manager, engineers, and interns
// create an empty employee id array to store the employee ids
const employeeMembers = [];
const employeeIds = [];
// 5.
// print user of usage

//inital fuction to begin the program that will initiate the manager prompt
function beginprompt() {
    managerPrompt();
}
//This prompt will take in the inputs of a name,id,email and office number then return all the vlaues as a new manager
function managerPrompt() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please Enter Your Team Managers name",
        },
        {
            type: "input",
            name: "id",
            message: "Enter your Managers ID number:",
        },
        {
            type: "input",
            name: "email",
            message: "Please Enter Managers Email Adress",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter managers Office number",
        }

    ])
        .then((userRes) => {
            const manager = new Manager(
                userRes.name,
                userRes.id,
                userRes.email,
                userRes.officeNumber
            );
            //adding the new manager to our employee array and adding the managers id into our id array
            employeeMembers.push(manager)
            employeeIds.push(manager.id)
            //calling our next function to run to add more team members if nescassary
            addEmployee();

        }
        );
}

// 8.
// create team function
// - prompt user with the list of choices for Engineer, Intern, or End of adding employee for the team
// - in .then callback function check what the user choice is and make call to the corresponding functions respectively
// - make call to add-engineer-function if the choice is engineer
// - make call to add-intern-function if choice is intern
// - make call to build-team function if choice is end of adding employee
function addEmployee() {
    inquirer.prompt([
        {
            type: "list",
            name: "employeePosition",
            message: "Would you like to add anyother employees?",
            choices: ["Add Intern", "Add Engineer", "No I am Finished"]

        },
    ])
        //if the users input to the addemplyes prompt is add intern the internprompt function will bhe excecuded
        .then((userRes) => {
            if (userRes.employeePosition === "Add Intern") {
                internPrompt();
            }
            //if the users input to the addemplyes prompt is add enginerr the engineerprompt function will be excecuded
            else if (userRes.employeePosition === "Add Engineer") {
                engineerPrompt();
            }
            //if the users input to the addemplyes prompt is No i am finished the function to create file will be exccuted,There is no need to make this statement = to the userres of no i am finished for this is the last possible ooptions that can be ran if the other to options are null
            else{
                generateFile();
            }
        });
}
// 8.
// add engineer function
// - prompt user with questions for engineer name, id, email, and github name
// - in .then callback create engineer object by instantiating Engineer class instance passing name, id, email, and github as arguments to class constructor
// - push engineer object to employee member array
// - push engineer id to employee id array
// - make call to create team function

// 9.
// add intern function
// - prompt user with questions for intern name, id, email, and school
// - in .then callback create intern object by instantiating Intern class instance passing name, id, email, and school as arguments to class constructor
// - push intern object to employee member array
// - push intern id to employee id array
// - make call to create team function

// 10.
// build team function
// - check existing of dist subfolder
// - if not exist, create the dist subfolder
// - make call to imported render function passing employee member array as argument and assign returned html to a variable
// - make call to fs write file function passing the html file path, html variable

