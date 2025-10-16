const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('clientess1', 'postgres', 'joelizsa', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
  logging: false
});

module.exports = sequelize;
