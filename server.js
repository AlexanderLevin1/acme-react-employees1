const express = require('express');
const app = express();
const path = require('path');

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));
app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/api/employees', (req, res, next) => {
    Employee.findAll({
        include: [
        {
            model: Employee,
            as: 'manager'
        }
        ]
    })
    .then(employees => res.send(employees))
    .catch(next);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));

const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_emp_dir');

const Employee = conn.define('employee', {
    name: Sequelize.STRING
});

Employee.belongsTo(Employee, {as: 'manager'});
Employee.hasMany(Employee, { as:'workers', foreignKey:'managerId'});

conn.sync({ force: true })
.then( () => {
    return Promise.all([
        Employee.create({ name: 'Alan'}),
        Employee.create({ name: 'Prof'})
    ])
    .then(([alan, prof ]) => {
        return Promise.all([
            alan.setManager(prof)
        ])
    })
});

module.exports = Employee;
