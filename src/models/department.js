// will hold all the functions related to the 'department' table

require('dotenv').congif();
const { Sequelize } = require('sequelize');

// view all departments
async function viewAllDepartments() {
    try {
        const res = await client.query('SELECT * FROM department');
        
    }
}