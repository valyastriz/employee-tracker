const express = require('express');
// const routes = require('./routes');
const sequelize = require('./config/connection');

const { department, employee, role } = require('./models');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/employees', async (req, res) => {
    try {
        const data = await employee.findAll();
        res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json(error)
    }
})
// turn on routes
// app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
