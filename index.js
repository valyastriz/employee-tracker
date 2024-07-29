const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'list',
            name: 'selectedOption',
            message: 'What would you like to view? ',
            choices: 
            [
                { name: 'View all departments', value: 'ViewAllDepts' },
                { name: 'View all rols', value: 'ViewAllRoles' },
                { name: 'View all employees', value: 'ViewAllEmployees' },
                { name: 'Add a department', value: 'AddDept' },
                { name: 'Add an employee', value: 'AddEmployee' },
                { name: 'Update an employee role', value: 'UpdateEmpRole' },
            ]
        },
    ])