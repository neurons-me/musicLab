// apps/musiclab/index.js - Aplicación MusicLab que maneja múltiples dominios
const express = require('express');
const app = express();
const PORT = process.env.PORT || 9006;

// Middleware para manejar las rutas basadas en el dominio de origen
app.use((req, res, next) => {
    const domain = req.headers.host; // Obtiene el dominio desde el request

    /*
    musiclab.studio - Main domain for MusicLab
    papa-juliett.com - Alternate domain for MusicLab
    mdrnchurch.com - Additional domain managed under MusicLab
    */

    // Lógica para redirigir a diferentes secciones según el dominio
    switch (domain) {
        case 'musiclab.studio':
            // Redirigir a la sección específica para musiclab.studio
            res.redirect('/musiclab'); // Esta ruta puede renderizar una vista o ejecutar lógica específica
            break;
        case 'papa-juliett.com':
            // Redirigir a la sección específica para papa-juliett.com
            res.redirect('/papa-juliett');
            break;
        case 'mdrnchurch.com':
            // Redirigir a la sección específica para mdrnchurch.com
            res.redirect('/mdrnchurch');
            break;
        default:
            // Redirigir a una página por defecto o mostrar un error si el dominio no es reconocido
            res.redirect('/not-found');
            break;
    }
});

// Definición de las rutas específicas para cada sección

app.get('/musiclab', (req, res) => {
    // Renderiza o maneja la lógica para musiclab.studio
    res.send('Bienvenido a MusicLab Studio.');
});

app.get('/papa-juliett', (req, res) => {
    // Renderiza o maneja la lógica para papa-juliett.com
    res.send('Bienvenido a Papa Juliett.');
});

app.get('/mdrnchurch', (req, res) => {
    // Renderiza o maneja la lógica para mdrnchurch.com
    res.send('Bienvenido a MDRN Church.');
});

app.get('/not-found', (req, res) => {
    // Muestra una página de error o un mensaje de dominio no reconocido
    res.status(404).send('Dominio no reconocido.');
});

// Iniciar el servidor en el puerto especificado
app.listen(PORT, () => {
    console.log(`MusicLab está escuchando en el puerto ${PORT}`);
    // Aquí puedes agregar la lógica para reportarte con Netget si es necesario
});