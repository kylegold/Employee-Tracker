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
            "viewEmployee"
        ]
    }
]

// Prompt user to add new.. departments, roles, employees
// Prompt user to view.. departments, roles, employees
// Prompt user to update employee role
const userControls = () => {
    inquirer.prompt(userInteraction)
.then(choice => {
    const userChoice = choice.userInteraction 

    switch (userChoice) {
        case 'addDepartment':
        addDepartment();
        break;
        
        case 'addRole':
        addRole();
        break;
        
        case 'addEmployee':
        addEmployee();
        break;

        case 'viewDepartment':
        viewDepartments();
        break;

        case 'viewRole':
        viewRoles();
        break;
        
        case 'viewEmployee':
        viewEmployees();
        break;

    }
    })
    
}
userControls()
   

const addDepartment = () => {
        inquirer.prompt(
            [
            {
                name: "departmentAdded",
                type: "input",
                message: "Please enter the Department you would like to add"
            }
        ])
        .then(department => {
           connection.query(`INSERT INTO Department(departmentName) VALUES("${department.departmentAdded}")`, (err, res) => {
            if (err){
                throw err
            }
            else{
                console.log(`${department.departmentAdded} has been successfully added to the Department Table!`)
                console.log(res)
            }
          
        })
        })
        
}

const addRole = () => {
        inquirer.prompt(
            [
            {
                name: "roleTitleAdded",
                type: "input",
                message: "Please enter the Role title"
            },
            {
                name: "roleSalaryAdded",
                type: "input",
                message: "Please enter the Role salary"
            },
            {
                name: "departmentId",
                type: "input",
                message: "Please enter the Department Id"
            }
        ])
        .then(role => {
           connection.query(`INSERT INTO Role(roleTitle, salary, departmentId) VALUES("${role.roleTitleAdded}", "${role.roleSalaryAdded}", "${role.departmentId}")`, (err, res) => {
            if (err){
                throw err
            }
            else{
                console.log(`${role.roleTitleAdded} has been successfully added to the Role Table!`)
                console.log(`${role.roleTitleAdded} Salary: $${role.roleSalaryAdded}`)
                console.log(`Department ID: $${role.departmentId}`)

                console.log(res)
            }
          
        })
        })
        
}

const addEmployee = () => {
 
        inquirer.prompt(
            [
            {
                name: "employeeFirstName",
                type: "input",
                message: "Please enter employees' First Name"
            },
            {
                name: "employeeLastName",
                type: "input",
                message: "Please enter employees' Last Name"
            },
            {
                name: "roleId",
                type: "input",
                message: "Please enter the Role Id"
            }
        ])
        .then(employee => {
           connection.query(`INSERT INTO Employee(first_name, last_name, roleId) VALUES("${employee.employeeFirstName}", "${employee.employeeLastName}", "${employee.roleId}")`, (err, res) => {
            if (err){
                throw err
            }
            else{
                console.log(`${employee.employeeFirstName} ${employee.employeeLastName} has been successfully added to the Employee Table!`)
                console.log(`Role ID: $${employee.roleId}`)
                // console.log(`Manager ID: $${employee.managerId}`)

                console.log(res)
            }
          
        })
        })
}

const viewDepartments = () => {
    connection.query(`SELECT * FROM Department`, (err, res) => {
        res.forEach(department => {
         console.log('Department Name: ' + department.departmentName);
         console.log('Department ID: ' + department.departmentId); 
         console.log('----------------')
        })
         
     })
     userControls()
}

 
const viewRoles = () => {        
        connection.query(`SELECT * FROM Role`, (err, res) => {
            res.forEach(role => {
             console.log('Role Name: ' + role.roleTitle);
             console.log('Role ID: ' + role.roleId); 
             console.log('Salary: ' + role.salary); 
             console.log('Department ID: ' + role.departmentId); 
             console.log('----------------')
            })     
         })
         userControls()
        }

const viewEmployees = () => {        
                    connection.query(`SELECT * FROM Employee`, (err, res) => {
            res.forEach(employee => {
             console.log('Employee Name: ' + employee.first_name + employee.last_name); 
             console.log('Salary: ' + employee.employeeId); 
             console.log('Role ID: ' + employee.roleId);
             console.log('Manager ID' + employee.managerId) 
             console.log('----------------')
            })
            })
            // userControls()
            
        }