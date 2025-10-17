require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./db');
const Cliente = require('./models/clientes');

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Ruta principal para verificar conexión con el backend
app.get('/', (req, res) => {
  console.log("💻 Conectado al backend");
  res.json({ mensaje: "✅ Servidor activo y conectado al backend" });
});

// ✅ Ruta GET para obtener todos los clientes
app.get('/api/cliente', async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    console.error("❌ Error al obtener los clientes:", error);
    res.status(500).json({ error: 'Error al obtener los clientes' });
  }
});

// ✅ Ruta POST para agregar un cliente
app.post('/api/clientes', async (req, res) => {
  try {
    const { nombre, usuario } = req.body;

    // Solo enviamos los campos que necesitamos, Sequelize maneja el id automáticamente
    const nuevo = await Cliente.create({ 
      nombre,
      usuario
    });

    res.json(nuevo);
  } catch (error) {
    console.error("❌ Error al crear cliente:", error);
    res.status(500).json({ error: 'Error al crear el cliente' });
  }
});

// ✅ Ruta GET por ID
app.get('/api/cliente/:id', async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) return res.status(404).json({ error: 'Cliente no encontrado' });
    res.json(cliente);
  } catch (error) {
    console.error("❌ Error al buscar cliente:", error);
    res.status(500).json({ error: 'Error al buscar el cliente' });
  }
});

// ✅ Iniciar servidor y probar conexión
const PORT = process.env.PORT || 4050;
app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conectado a PostgreSQL');
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  } catch (error) {
    console.error('❌ Error al conectar la base de datos:', error);
  }
});
