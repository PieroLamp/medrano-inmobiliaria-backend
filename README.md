#  Medrano Inmobiliaria - Backend 

Este proyecto es la base del sistema de gestión inmobiliaria para "Medrano Inmobiliaria". Se ha desarrollado siguiendo estándares de **Ingeniería de Software con IA** y buenas prácticas de gobernanza en GitHub.

# Características Técnicas
* Gobernanza de Datos: Protección de rama "main" mediante Rulesets de GitHub.
* Arquitectura: Patrón de diseño MVC (Modelo-Vista-Controlador).
* Seguridad: Implementación de variables de entorno y protección de credenciales vía ".gitignore".
* Tecnologías: Node.js, Express, Morgan, Cors, Dotenv.

#  Estructura del Proyecto
* src/config: Conexión a la base de datos.
* src/controllers: Lógica de negocio (procesamiento de datos).
* src/routes: Definición de los endpoints de la API.
* src/models: Modelado de los objetos inmobiliarios.

#  Instalación y Uso
1. Clonar el repositorio.
2. Ejecutar "npm install".
3. Configurar el archivo ".env" (puerto, db_user, etc.).
4. Iniciar el servidor con "npm start" o "node index.js".

Desarrollado como parte del proyecto de Ingeniería de Software - SENATI.