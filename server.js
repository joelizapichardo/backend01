const express = require('express');
const cors = require('cors');
const sequelize = require('./db'); // conexión a clientess1
const Cliente = require('./clientes'); // modelo Cliente

const app = express();
app.use(express.json());
app.use(cors());

// Verificar conexión con la base de datos
sequelize.authenticate()
  .then(() => console.log(" ¡Conectado exitosamente a la base de datos clientess1!"))
  .catch(err => console.error(" Error al conectar a la DB:", err));

// Ruta GET para obtener todos los clientes
app.get('/api/clientes', async (req, res) => {
  try {
    const clientes = await Clientes.findAll();
    res.json(clientes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Iniciar servidor
app.listen(3000, () => console.log("🚀 Servidor corriendo en http://localhost:3000"));
