// src/controllers/auth.controller.js
const authController = {};

// Se ejecuta tras un login exitoso con Google
authController.loginSuccess = (req, res) => {
    if (req.user) {
        res.status(200).json({
            success: true,
            message: "Bienvenido al sistema de Medrano Inmobiliaria",
            user: {
                name: req.user.displayName,
                email: req.user.emails[0].value,
                photo: req.user.photos[0].value
            }
        });
    } else {
        res.status(401).json({ success: false, message: "No autorizado" });
    }
};

// Finaliza la sesión del usuario
authController.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) return next(err);
        res.redirect('/');
    });
};

module.exports = authController;