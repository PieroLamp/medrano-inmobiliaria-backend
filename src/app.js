const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

// Middlewares profesionales
app.use(cors()); // Permite que el frontend se conecte
app.use(morgan('dev')); // Loguea las peticiones en consola
app.use(express.json()); // Permite recibir JSON en el body

// Definición de Rutas
app.use('/api/propiedades', require('./routes/propiedades.routes'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor de Medrano Inmobiliaria corriendo en http://localhost:${PORT}`);
});