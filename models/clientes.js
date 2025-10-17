const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // Asegúrate de que esta ruta a tu conexión Sequelize sea correcta

// ----------------------------------------------------------------------

const Cliente = sequelize.define('Cliente', {
    id_cliente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    
    nombre: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    
    usuario: {
        type: DataTypes.TEXT,
        allowNull: false // Puede ser nulo
    },
    

}, {
    // Opciones del Modelo:
    tableName: 'cliente', // Nombre exacto de tu tabla en PostgreSQL
    timestamps: false,     // Desactivar campos createdAt y updatedAt automáticos
    freezeTableName: true  // Asegura que Sequelize use el nombre de tabla tal cual
});

// ----------------------------------------------------
// 2. Exportación
// ----------------------------------------------------

module.exports = Cliente;