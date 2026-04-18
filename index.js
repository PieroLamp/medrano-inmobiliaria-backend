// index.js
require('dotenv').config(); // 1. Cargar variables de entorno siempre primero
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');

const app = express(); // 2. Inicializar Express

// Importar configuración de Passport
require('./src/config/passport'); 

// --- MIDDLEWARES ---
app.use(morgan('dev')); // Registrar peticiones en consola
app.use(express.json()); // Permitir que el servidor entienda JSON

// Middleware de sesión (necesario para Google Auth)
app.use(session({ 
    secret: process.env.SESSION_SECRET || 'secret_temporal', 
    resave: false, 
    saveUninitialized: true 
}));

// Inicializar Passport
app.use(passport.initialize());
app.use(passport.session());

// --- RUTAS ---

// Rutas de autenticación
app.use('/auth', require('./src/routes/auth.routes'));

// Datos simulados de propiedades
const propiedades = [
    { id: 1, titulo: "Mansión en el Valle", precio: 250000, estado: "Venta" },
    { id: 2, titulo: "Departamento Minimalista", precio: 1500, estado: "Alquiler" }
];

// Ruta de API de propiedades
app.get('/api/propiedades', (req, res) => {
    res.json({
        ok: true,
        total: propiedades.length,
        data: propiedades
    });
});

// --- LANZAMIENTO ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor Medrano Inmobiliaria en puerto ${PORT}`);
});