// functions related to the role table

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { Department } = require('./Department');

class Role extends Model {}

Role.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        salary: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        department_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Department,
                key: 'id',
            },
        },
    },
    {
        sequelize,
        modelName: 'Role',
        tableName: 'role',
        timestamps: false,
    }
);

// function to view all roles
async function viewAllRoles() {
    try {
        const roles = await Role.findAll();
        console.table(roles.map(role => role.get({ plain: true })));
        return roles;
    } catch (err) {
        console.error('Error executing query', err.stack);
    }
}

// function to add a new role
async function addRole(title, salary, department_name) {
    try {
        const department = await Department.findOne({ where: { name: department_name } });
        if (!department) throw new Error(`Department with name "${department_name}" not found.`);

        const role = await Role.create({
            title,
            salary,
            department_id: department.id,
        });

        console.log('Role added: ', role.get({ plain: true }));
        return role;
    } catch (err) {
        console.error('Error executing query', err.stack);
    }
}

// function to get role titles
async function getRoleTitles() {
    try {
        const roles = await Role.findAll({ attributes: ['title'] });
        return roles.map(role => role.title);
    } catch (err) {
        console.error('Error executing query', err.stack);
        return [];
    }
}

module.exports = {
    Role,
    viewAllRoles,
    addRole,
    getRoleTitles,
};