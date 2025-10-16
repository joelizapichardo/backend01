const express = require('express');
const sequelize = require('./db');
require('dotenv').config();

const clienteRoutes = require('./models/routes/clientes.js');

const app = express();
app.use(express.json());

// Conexión a la DB
sequelize.authenticate()
  .then(() => console.log("¡Te conectaste a PostgreSQL!"))
  .catch(err => console.error(" Intenta otra vez:", err));

app.use('/api/clientes', clienteRoutes);
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});

