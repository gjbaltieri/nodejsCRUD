const express = require('express');
const router = express.Router();
const Product = require('../controllers/productsController');
const methodOverride = require('method-override');

router.use(methodOverride('_method'))
// GET

router.get('/', (req, res) => {res.render('index', { error: false, doc: false });
})
router.get('/cadastrar', (req, res) => {res.render('cadastrar', { error: false, doc: false });
});
router.get('/all', Product.allProducts);
router.get('/edit/:id', Product.loadProduct)

// POST

router.post('/cadastrar', express.urlencoded({extended: true}), Product.createProduct);
router.post('/edit/:id', express.urlencoded({extended: true}), Product.editProduct)

// DELETE 

router.delete('/all/:id', Product.productDelete);


module.exports = router