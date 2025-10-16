const express = require('express');
const cors = require('cors');
const sequelize = require('./db');
const clientes = require('./clientes');

const app = express();
app.use(express.json());
app.use(cors());

sequelize.authenticate()
  .then(() => console.log("¡Te conectaste a la DB!"))
  .catch(err => console.error("Error al conectar a la DB:", err));



app.get('/api/clientes', async (req, res) => {
  try {
    const clientes = await clientes.findAll();
    res.json(clientes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log("🚀 Servidor corriendo en http://localhost:3000"));
