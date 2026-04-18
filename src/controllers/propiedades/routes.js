const { Router } = require('express');
const router = Router();
const { getPropiedades } = require('../controllers/propiedades.controller');

// GET: http://localhost:4000/api/propiedades
router.get('/', getPropiedades);

module.exports = router;