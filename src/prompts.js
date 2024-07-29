// will handle the inquirer propmts and user input

const inquirer = require('inquirer');

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
                { name: 'View all rols', value: 'ViewAllRoles' },
                { name: 'View all employees', value: 'ViewAllEmployees' },
                { name: 'Add a department', value: 'AddDept' },
                { name: 'Add an employee', value: 'AddEmployee' },
                { name: 'Update an employee role', value: 'UpdateEmpRole' },
            ]
        },
    ])
}





function SelectedCase(selectedOption) {
    switch (license) {
        case 'ViewAllDepts':
            console.log('ViewAllDepts selected');
            break;
        case 'ViewAllRoles': 
            console.log('ViewAllRoles selected');
            break;
        case 'ViewAllEmployees':
            console.log('ViewAllEmployees selected');
            break;
        case 'AddDept': 
            console.log('AddDept selected');
            break;
        case 'AddEmployee':
            console.log('AddEmployee selected');
            break;
        case 'UpdateEmpRole': 
            console.log('UpdateEmployee selected');
            break;
    }
}