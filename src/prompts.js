// will handle the inquirer propmts and user input

const inquirer = require('inquirer');
const { viewAllDepartments, viewAllRoles, viewAllEmployees, addDepartment, addEmployee, updateEmployeeRole } = require('./utils/queries');

function startApp() {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'selectedOption',
            message: 'What would you like to do? ',
            choices: 
            [
                { name: 'View all departments', value: 'ViewAllDepts' },
                { name: 'View all roles', value: 'ViewAllRoles' },
                { name: 'View all employees', value: 'ViewAllEmployees' },
                { name: 'Add a department', value: 'AddDept' },
                { name: 'Add an employee', value: 'AddEmployee' },
                { name: 'Update an employee role', value: 'UpdateEmpRole' },
            ]
        },
    ]).then(answers => {
        SelectedCase(answers.selectedOption);
    }).catch(error => {
        console.error('Error: ', error);
    });
}


function SelectedCase(selectedOption) {
    switch (selectedOption) {
        case 'ViewAllDepts':
            viewAllDepartments();
            break;
        case 'ViewAllRoles': 
            viewAllRoles();
            break;
        case 'ViewAllEmployees':
            viewAllEmployees();
            break;
        case 'AddDept': 
            addDepartment();
            break;
        case 'AddEmployee':
            addEmployee();
            break;
        case 'UpdateEmpRole': 
            updateEmployeeRole();
            break;
        default:
            console.log('Invalid option selected');
            break;
    }
}

module.exports = { startApp };