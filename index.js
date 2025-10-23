require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./db');
const Cliente = require('./clientes');

const app = express();
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  console.log("💻 Conectado al backend");
  res.json({ mensaje: "✅ Servidor activo y conectado al backend" });
});


app.get('/api/clientes', async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    console.error("❌ Error al obtener los clientes:", error);
    res.status(500).json({ error: 'Error al obtener los clientes' });
  }
});


app.post('/api/clientes', async (req, res) => {
  try {
    const { nombre, usuario } = req.body;
    const nuevo = await Cliente.create({ nombre, usuario });
    res.json(nuevo);
  } catch (error) {
    console.error("❌ Error al crear cliente:", error);
    res.status(500).json({ error: 'Error al crear el cliente' });
  }
});


app.get('/api/clientes', async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) return res.status(404).json({ error: 'Cliente no encontrado' });
    res.json(cliente);
  } catch (error) {
    console.error("❌ Error al buscar cliente:", error);
    res.status(500).json({ error: 'Error al buscar el cliente' });
  }
});
const PORT = process.env.PORT || 3000;

sequelize.sync() 
    .then(() => {
        app.listen(PORT, () => {
            console.log('Servidor Express activo y escuchando en el puerto ${PORT}');
        });
    })
    .catch(error => {
        console.error("❌ Error al conectar a la base de datos:", error);
    });