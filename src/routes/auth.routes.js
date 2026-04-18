// src/routes/auth.routes.js
const router = require('express').Router();
const passport = require('passport');
const authController = require('../controllers/auth.controller');

// Inicia el flujo con Google (abre la ventana de selección de cuenta)
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// URL de retorno (callback) configurada en Google Console
router.get('/google/callback', 
    passport.authenticate('google', { failureRedirect: '/login-failure' }),
    (req, res) => {
        res.redirect('/api/propiedades'); // Redirige a las propiedades tras éxito
    }
);

router.get('/logout', authController.logout);

module.exports = router;