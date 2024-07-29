// will handle the inquirer propmts and user input

const inquirer = require('inquirer');
const { viewAllDepartments, addDepartment, getDepartmentNames } = require('./models/department');
const { viewAllEmployees, addEmployee, updateEmployeeRole, getEmployeeNames } = require('./models/employee');
const { viewAllRoles, addRole, getRoleTitles } = require('./models/role');


async function startApp() {
    const { selectedOption } = await inquirer.prompt([
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
    startApp(); // restarts the prompt loop
}


async function SelectedCase(selectedOption) {
    switch (selectedOption) {
        case 'ViewAllDepts':
            await viewAllDepartments();
            break;
        case 'ViewAllRoles': 
            await viewAllRoles();
            break;
        case 'ViewAllEmployees':
            await viewAllEmployees();
            break;
        case 'AddDept': 
            await promptAddDepartment();
            break;
        case 'AddRole':
            await promptAddRole();
            break;
        case 'AddEmployee':
            await promptAddEmployee();
            break;
        case 'UpdateEmpRole': 
            await promptUpdateEmployeeRole();
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
    const roles = await getRoleTitles();
    const employees = await getEmployeeNames();
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
            type: 'list',
            name: 'role_name',
            message: 'Select the role for the employee ',
            choices: roles,
        },
        {
            type: 'list',
            name: 'manager_name',
            message: 'Select the manager for the employee: ',
            choices: ['None', ...employees],
        },
    ]);
    await addEmployee(answers.first_name, answers.last_name, answers.role_name, answers.manager_name === 'None' ? null : answers.manager_name);
}

async function promptAddRole() {
    const departments = await getDepartmentNames();
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
            type: 'list',
            name: 'department_name',
            message: 'Select the department for the role: ',
            choices: departments,
        },
    ]);
    await addRole(answers.title, answers.salary, answers.department_name);
}

async function promptUpdateEmployeeRole() {
    const employeeRoles = await getRoleTitles();
    const employeeNames = await getEmployeeNames();
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'employee_name',
            message: 'Select which employee you would like to update: ',
            choices: employeeNames,
        },
        {
            type: 'list',
            name: 'new_role',
            message: 'Select new role for the employee: ',
            choices: employeeRoles,
        },
    ]);
    await updateEmployeeRole(answers.employee_name, answers.new_role);
}

module.exports = { startApp };