const express = require('express');
const router = express.Router();
const Cliente = require('./models/Cliente'); // Modelo Sequelize

// Obtener todos los clientes
router.get('/', async (req, res) => {
  try {
    const results = await Cliente.findAll();
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener clientes' });
  }
});

module.exports = router;
