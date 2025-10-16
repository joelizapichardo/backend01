const sequelize = require('./db');

sequelize.authenticate()
  .then(() => console.log(" Conexión correcta a clientess1"))
  .catch(err => console.error(" Error de conexión:", err));
