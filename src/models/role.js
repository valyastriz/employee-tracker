// functions related to the role table

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
const Department = require('./department');

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
                model: 'department',
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

