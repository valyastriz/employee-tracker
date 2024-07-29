// will handle the inquirer propmts and user input

const inquirer = require('inquirer');
const { viewAllDepartments, viewAllRoles, viewAllEmployees, addDepartment, addEmployee, updateEmployeeRole, getEmployeeNames, getRoleTitles, getDepartmentNames, addRole } = require('./utils/queries');

async function startApp() {
    const { selectedOption } = await inquirer
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
            ],
        },
    ]);

    await SelectedCase(selectedOption);
    startApp();
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

async function promptAddDepartment() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the name of the department: ',
        },
    ]);
    await addDepartment(answers.name);
}

async function promptAddEmployee() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'Enter the first name of the employee: ',
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'Enter the last name of the employee: ',
        },
        {
            type: 'input',
            name: 'role_name',
            message: 'Enter the role the employee: ',
        },
        {
            type: 'input',
            name: 'manager_name',
            message: 'Enter the manager name of the employee (or leave blank if none): '
        },
    ]);
    await addEmployee(answers.first_name, answers.last_name, answers.role_name, answers.manager_name || null);
}

async function promptAddRole() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the name of the role: ',
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Enter the salary of the role',
        },
        {
            type: 'input',
            name: 'department_name',
            message: 'Enter the name of the department for the role: ',
        },
    ]);
    await addRole(answers.title, answers.salary, answers.department_name);
}

async function promptUpdateEmployeeRole() {
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'employee_name',
            message: 'Select which employee you would like to update: ',
            choices: 
                [
                    //list of employees currently in the database
                ]
        },
        {
            type: 'input',
            name: 'new_role',
            message: 'Select new role for the employee: ',
            choices: 
                [
                    //list of current roles in the database
                ]
        },
    ]);
    await updateEmployeeRole(answers.employee_name, answers.new_role);
}


module.exports = { startApp };