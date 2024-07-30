require('dotenv').config();
const sequelize = require('../src/config/connection');
const { Department, Employee, Role } = require('../src/models');

const departmentSeed = require('./departmentSeed.json');
const employeeSeed = require('./employeeSeed.json');
const roleSeed = require('./roleSeed.json');


const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await Department.bulkCreate(departmentSeed);

    await Role.bulkCreate(roleSeed);

    await Employee.bulkCreate(employeeSeed);

    console.log('Database seeded successfully.');
    process.exit(0);
};

seedDatabase();
