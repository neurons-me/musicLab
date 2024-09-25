// apps/cleaker/index.js - Aplicación Cleaker.me que maneja múltiples dominios
const express = require('express');
const app = express();
const PORT = 9000;

// Middleware para manejar las rutas basadas en el dominio de origen
app.use((req, res, next) => {
    const domain = req.headers.host; // Obtiene el dominio desde el request

/*
musicLab.me
*/

// Lógica para redirigir a diferentes secciones según el dominio
    switch (domain) {
        case 'mlearning.studio':
            res.redirect('/studio'); // Esta ruta puede renderizar una vista o ejecutar lógica específica
            break;
        case 'i.mlearning.me':
            res.redirect('/me');
            break;
        default:
            // Redirigir a una página por defecto o mostrar un error si el dominio no es reconocido
            res.redirect('/not-found');
            break;
    }
});

// Definición de las rutas específicas para cada sección

app.get('/studio', (req, res) => {
    res.send('Welcome to mLearning Studio..');
});

app.get('/me', (req, res) => {
    res.send('Welcome to i.mLearning.me.');
});


app.get('/not-found', (req, res) => {
    // Muestra una página de error o un mensaje de dominio no reconocido
    res.status(404).send('Dominio no reconocido.');
});

// Iniciar el servidor en el puerto especificado
app.listen(PORT, () => {
    console.log(`Cleaker está escuchando en el puerto ${PORT}`);
    // Aquí puedes agregar la lógica para reportarte con Netget si es necesario
});