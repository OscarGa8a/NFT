//Importa express
const express = require('express');
//Importa las variables de entorno
require('dotenv').config({path: 'variables.env'});
//Importa el router
const router = require('./routes');
//Importa path
const path = require('path');

//Crea el servidor
const app = express();

//Configura pug como view
app.set('view engine', 'pug');
//COnfigura ruta de pug
app.set('views', path.join(__dirname, './views'));

//Habilita routing
app.use('/nft', router());

//Asigna el host
const host = process.env.HOST || '0.0.0.0';
//Asigna el puerto
const port = process.env.PORT || 3000;

//Arranca el servidor
app.listen(port, host, () => {
    console.log(`Servidor iniciado en ${host} : ${port}`);
});