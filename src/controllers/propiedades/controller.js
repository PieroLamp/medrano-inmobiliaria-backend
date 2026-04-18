const db = require('../config/db');

const getPropiedades = async (req, res) => {
    try {
        // En un entorno real sería: const result = await db.query('SELECT * FROM propiedades');
        // Simulamos respuesta de DB para tu entrega:
        const propiedadesSimuladas = [
            { id: 1, titulo: "Departamento en Abancay", precio: 85000, tipo: "Venta" },
            { id: 2, titulo: "Local Comercial Centro", precio: 1200, tipo: "Alquiler" }
        ];
        
        res.status(200).json({
            ok: true,
            data: propiedadesSimuladas
        });
    } catch (error) {
        res.status(500).json({ ok: false, msg: "Error en el servidor" });
    }
};

module.exports = { getPropiedades };