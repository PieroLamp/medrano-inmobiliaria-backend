const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API Medrano Inmobiliaria v1.0 - Lista para la acción');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});