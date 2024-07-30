require('dotenv').config();
const sequelize = require('../src/config/connection');
const { Department } = require('../src/models/Department');
const { Employee } = require('../src/models/Employee');
const { Role } = require('../src/models/Role');

const departmentSeed = require('./departmentSeed.json');
const employeeSeed = require('./employeeSeed.json');
const roleSeed = require('./roleSeed.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    console.log('Department:', Department);
    console.log('departmentSeed:', departmentSeed);
    
    await Department.bulkCreate(departmentSeed);
    await Role.bulkCreate(roleSeed);
    await Employee.bulkCreate(employeeSeed);

    console.log('Database seeded successfully.');
    process.exit(0);
};

seedDatabase();
