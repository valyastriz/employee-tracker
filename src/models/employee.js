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

module.exports = Employee;