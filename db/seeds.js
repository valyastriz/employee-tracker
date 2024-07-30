const sequelize = require('../src/config/connection');
const Department = require('../src/models/department');
const Employee = require('../src/models/employee');
const Role = require('../src/models/role');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await Department.bulkCreate([
        { name: 'HR' },
        { name: 'Engineering' },
        { name: 'Finance' },
    ]);

    await Role.bulkCreate([
        { title: 'Manager', salary: 80000, department_id: 1 },
        { title: 'Engineer', salary: 70000, department_id: 2 },
        { title: 'Accountant', salary: 60000, department_id: 3 },
    ]);

    await Employee.bulkCreate([
        { first_name: 'John', last_name: 'Doe', role_id: 1, manager_id: null },
        { first_name: 'Jane', last_name: 'Smith', role_id: 2, manager_id: 1 },
        { first_name: 'Emily', last_name: 'Jones', role_id: 3, manager_id: null },
    ]);

    console.log('Database seeded successfully.');
    process.exit(0);
};

seedDatabase();
