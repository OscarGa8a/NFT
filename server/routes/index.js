//Importa express
const express = require('express');
//Obtiene el Router de express
const router = express.Router();

module.exports = () => {

    router.get('/', (req, res) => {
        res.render('index');
    });

    router.get('/arjs', (req, res) => {
        res.render('arjs');
    });

    return router;
}