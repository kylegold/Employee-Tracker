// Dependencies
const inquirer = require('inquirer');
const mysql = require('mysql');

// Create SQL Connection
const connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",
    password: "password",

    database: "employeetracker_db"
});

// data
const userInteraction = [
    {
        name: "userInteraction",
        type: "list",
        message: "Please choose a user interaction",
        choices: [
            "addDepartment", 
            "addRole", 
            "addEmployee",
            "viewDepartment",
            "viewRole",
            "viewEmployee",
            "updateEmployeeRole"
        ]
    }
]

// Prompt user to add new.. departments, roles, employees
// Prompt user to view.. departments, roles, employees
// Prompt user to update employee role
inquirer.prompt(userInteraction)
.then(choice => {
    const userChoice = choice.userInteraction 

    if(userChoice === 'addDepartment'){
        inquirer.prompt(
            [
            {
                name: "departmentAdded",
                type: "input",
                message: "Please enter the Department you would like to add"
            }
        ])
        .then(department => {
           connection.query(`INSERT INTO Department VALUES("${department.departmentAdded}")`, () => {
            console.log(`${department.departmentAdded} has been successfully added to the Department Table!`)
        })
        })
        
    }
    else if(userChoice === 'addRole'){
        console.log(userChoice)
    }
    else if(userChoice === 'addEmployee'){
        console.log(userChoice)
    }
    else if(userChoice === 'viewDepartment'){
        console.log(userChoice)
        connection.query(`SELECT * FROM Department`, (err, res) => {
           res.forEach(department => {
            console.log('Department Name: ' + department.departmentName);
            console.log('Department ID: ' + department.departmentId); 
            console.log('----------------')
           })
            
        })
    }
    else if(userChoice === 'viewRole'){
        console.log(userChoice)
    }
    else if(userChoice === 'viewEmployee'){
        console.log(userChoice)
    }
    else if(userChoice === 'updateEmployeeRole'){
        console.log(userChoice)
    }
    
})