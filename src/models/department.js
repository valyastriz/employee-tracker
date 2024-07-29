// will hold all the functions related to the 'department' table

const { Model, DataTypes } = require('sequelize');

const sequelize = require('./config/connection.js');

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

module.exports = Department;