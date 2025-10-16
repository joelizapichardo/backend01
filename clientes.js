// clientes.js
const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize'); // tu archivo de conexión
const { SCHEMA } = require('sqlite3');


const Clientes = sequelize.define('Clientes', {
  nombre_completo: {
    type: DataTypes.STRING,   
    allowNull: false
  },
  identificacion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha_nacimiento: {
    type: DataTypes.DATE,
    allowNull: false
  },
  sexo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: true
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: true
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: true
  },
  tipo_sangre: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'clientes',
  SCHEMA:'public', 
  timestamps: false

});


module.exports = Clientes;
