// functions related to the employee table

const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Employee extends Model {}

Employee.init (
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'employee',
                key: 'id',
            },
        },
        manager_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'employee',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        modelName: 'Employee',
        tableName: 'employee',
        timestamps: false,
    }
);


// function to view all employees
async function viewAllEmployees() {
    try {
        const employees = await Employee.findAll();
        console.table(employees.map(emp => emp.get({ plain: true })));
        return employees;
    } catch (err) {
        console.error('Error executing query', err.stack);
    }
}

// function to add a new employee
async function addEmployee(first_name, last_name, role_name, manager_name) {
    try {
        const role = await Role.findOne({ where: {title: role_name }});
        if (!role) throw new Error(`Role with title "${role_name}" not found`);

        let manager = null;
        if (manager_name) {
            manager = await Employee.findOne({
                where: sequelize.where(
                    sequelize.fn('concat', sequelize.col('first_name'), ' ', sequelize.col('last_name')), manager_name
                ),
            });
            if (!manager) throw new Error(`Manager with name "${manager_name}" not found.`);
        }

        const employee = await Employee.create({
            first_name,
            last_name,
            role_id: role.id,
            manager_id: manager ? manager.id : null,
        });

        console.log('Employee added: ', employee.get({ plain: true}));
        return employee;
    } catch (err) {
        console.error('Error executing query', err.stack);
    }
}

// function to update an employee's role
async function updateEmployeeRole(employee_name, new_role) {
    try {
        const employee = await Employee.findOne({
            where: sequelize.where(
                sequelize.fn('concat', sequelize.col('first_name'), ' ', sequlize.col('last_name')), employee_name
            ),
        });
        if (!employee) throw new Error(`Employee with name "${employee_name}" not found.`);

        const role = await Role.findOne({ where: { title: new_role } });
        if (!role) throw new Error(`Role with title "${new_role}" not found.`);

        employee.role_id = role.id;
        await employee.save();

        console.log('Employee role updated: ', employee.get({ plain: true }));
        return employee;
    }catch (err) {
        console.error('Error executing query', err.stack);
    }
}




module.exports = Employee;