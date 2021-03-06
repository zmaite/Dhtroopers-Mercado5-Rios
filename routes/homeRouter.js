const express = require('express');
const router = express.Router();
const controladorHome = require('../controller/homeController');

router.get('/', (req, res) => {
    // leo todo el array de products en el controlador homeController
    const products = controladorHome.leerTodos();
    // envío el array product a la vista para que la recorra EJS
    console.log('Volví del controlador')
    res.render('home', { products });
});

module.exports = router;