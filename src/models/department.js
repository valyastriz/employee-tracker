// will hold all the functions related to the 'department' table

const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Department extends Model {}

Department.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Department',
        tableName: 'department',
        timestamps: false,
    }
);

// function to view all departments
async function viewAllDepartments() {
    try {
        const departments = await Department.findAll();
        console.table(departments.map(dept => dept.get({ plain: true })));
        return departments;
    } catch (err) {
        console.error('Error executing query', err.stack);
    }
}

// function to add a new department
async function addDepartment(name) {
    try {
        const department = await Department.create({ name });
        console.log('Department added: ', department.get({ plain: true }));
        return department;
    } catch (err) {
        console.error('Error executing query', err.stack);
    }
}


module.exports = {
    Department,
    viewAllDepartments,
};