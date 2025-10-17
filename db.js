require('dotenv').config();
const { Sequelize } = require('sequelize');

// Conexión usando directamente la URL del .env
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Permite conexiones SSL seguras (Railway lo necesita)
    },
  },
  logging: false, // Opcional: quita los logs SQL en la consola
});

module.exports = sequelize;
