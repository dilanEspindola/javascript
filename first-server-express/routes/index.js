const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');

router.get('/', indexController.index);

router.get('/products', indexController.products);

router.post('/new-product', indexController.addNewProduct);

module.exports = router;