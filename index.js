// index.js
const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());

// Datos simulados de propiedades
const propiedades = [
    { id: 1, titulo: "Mansión en el Valle", precio: 250000, estado: "Venta" },
    { id: 2, titulo: "Departamento Minimalista", precio: 1500, estado: "Alquiler" }
];

// Ruta principal
app.get('/api/propiedades', (req, res) => {
    res.json({
        ok: true,
        total: propiedades.length,
        data: propiedades
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor Medrano Inmobiliaria en puerto ${PORT}`);
});const morgan = require('morgan');
