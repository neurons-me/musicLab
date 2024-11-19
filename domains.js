// apps/musiclab/index.js - Aplicación MusicLab que maneja múltiples dominios
import express from 'express';
import netgetGateway from './netgetGateway.js';

const app = express();
const PORT = process.env.PORT || 9006;

app.use(netgetGateway('musiclab.studio', (req, res) => {
    res.send('Welcome to MusicLab Studio.');
}
));

app.use(netgetGateway('papa-juliett.com', (req, res) => {
    res.send('Welcome to Papa Juliett.');
}
));

app.use(netgetGateway('mdrnchurch.com', (req, res) => {
    res.send('Welcome to MDRN Church.');
}
));

app.get('/not-found', (req, res) => {
    // Muestra una página de error o un mensaje de dominio no reconocido
    res.status(404).send('Dominio no reconocido.');
});

// Iniciar el servidor en el puerto especificado
app.listen(PORT, () => {
    console.log(`MusicLab está escuchando en el puerto ${PORT}`);
    // Aquí puedes agregar la lógica para reportarte con Netget si es necesario
});