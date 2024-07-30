require('dotenv').config();
const sequelize = require('../src/config/connection');
const { Department, Employee, Role } = require('../src/models');

const departmentSeed = require('./departmentSeed.json');
const employeeSeed = require('./employeeSeed.json');
const roleSeed = require('./roleSeed.json');


const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const departments = await Department.bulkCreate(departmentSeed);

    const roles = await Role.bulkCreate(roleSeed);

    const employees = await Employee.bulkCreate(employeeSeed);

    console.log('Database seeded successfully.');
    process.exit(0);
};

seedDatabase();
