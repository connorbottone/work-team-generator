const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const inquirer = require("inquirer");
const path = require("path");
const fs = require('fs')
const generateHtml = require('./utils/gerneratehtlm')

const template = require("./src/page-template");
const Employee = require("./lib/Employee");

const employeeMembers = [];


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
                createHTML();
            }
        });
}

function engineerPrompt(){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please Enter Your Engineers name",
        },
        {
            type: "input",
            name: "id",
            message: "Enter your Engineers ID number:",
        },
        {
            type: "input",
            name: "email",
            message: "Please Enter Engineers Email Adress",
        },
        {
            type: "input",
            name: "github",
            message: "Please Enter Engineers Github Username",
        }
    ])
    .then((userRes) => {
        const engineer = new Engineer(
            userRes.name,
            userRes.id,
            userRes.email,
            userRes.github
        );
        //adding the new engineer to our employee array and adding the engineers id into our id array
        employeeMembers.push(engineer)
        
        //calling our addEmployee function again to see if the user has more employees to add to the team.
        addEmployee();

    })
}
// 9.
// add intern function
// - prompt user with questions for intern name, id, email, and school
// - in .then callback create intern object by instantiating Intern class instance passing name, id, email, and school as arguments to class constructor
// - push intern object to employee member array
// - push intern id to employee id array
// - make call to create team function
function internPrompt(){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please Enter Your interns name",
        },
        {
            type: "input",
            name: "id",
            message: "Enter your interns ID number:",
        },
        {
            type: "input",
            name: "email",
            message: "Please Enter interns Email Adress",
        },
        {
            type: "input",
            name: "school",
            message: "Please Enter School name intern attends",
        }
    ])
    .then((userRes) => {
        const intern = new Intern(
            userRes.name,
            userRes.id,
            userRes.email,
            userRes.school
        );
        //adding the new intern to our employee array and adding the intern id into our id array
        employeeMembers.push(intern)
        
        //calling our addEmployee function again to see if the user has more employees to add.
        addEmployee();

    })

}

// 10.
// build team function
// - check existing of dist subfolder
// - if not exist, create the dist subfolder
// - make call to imported render function passing employee member array as argument and assign returned html to a variable
// - make call to fs write file function passing the html file path, html variable

function createHTML(){
    fs.writeFile("./dist/index.html",generateHtml(employeeMembers), (err)=>
    err ? console.log(err) :console.log("File has been generated")
    );

}
beginprompt();