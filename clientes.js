const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const Cliente = sequelize.define('Cliente', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  usuario: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'clientes',
  timestamps: false,
  freezeTableName: true
});

module.exports = Cliente;
