const express = require('express');
const { request } = require('node:http');

const app = express();

const port = 3000;

app.use(express.static(__dirname + "/public"));

app.get('/', (request, respuesta) => {
    respuesta.send('Mi respuesta desde express');
});

app.get('/servicios', (request, respuesta) =>{
    respuesta.send('Estas en la pagina de servicios');
});

app.use((request, respuesta, next) => {
    respuesta.status(404).sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
    console.log('Servidor a su servicio en el puerto', port);
});