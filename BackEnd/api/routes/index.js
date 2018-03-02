/*var express = require('express'),
  router = express.Router(),
  productCtrl = require('../controllers/ProductController');

//-------------------------------Product Routes-----------------------------------
router.get('/product/getProducts', productCtrl.getProducts);
router.get('/product/getProduct/:productId', productCtrl.getProduct);
router.get(
  '/product/getProductsBelowPrice/:price',
  productCtrl.getProductsBelowPrice
);
router.post('/product/createProduct', productCtrl.createProduct);
router.patch('/product/updateProduct/:productId', productCtrl.updateProduct);
router.delete('/product/deleteProduct/:productId', productCtrl.deleteProduct);

module.exports = router;*/
const express = require('express'),
  router = express.Router(),
//  asyncMiddleware = require('express-async-handler'),
  productCtrl = require('../controllers/ProductController');
  userCtrl = require('../controllers/UserController');

//-------------------------------Product Routes-----------------------------------
router.get('/product/getProducts', (productCtrl.getProducts));
router.get('/product/getProduct/:productId', (productCtrl.getProduct));
router.get(
  '/product/getProductsBelowPrice/:price',
  (productCtrl.getProductsBelowPrice)
);
router.post('/product/createProduct', (productCtrl.createProduct));
router.patch('/product/updateProduct/:productId', (productCtrl.updateProduct));
router.delete('/product/deleteProduct/:productId', (productCtrl.deleteProduct));

module.exports = router;

//-------------------------------User Routes-----------------------------------
router.get('/user/getUsers', (userCtrl.getUsers));
router.get('/user/getUser/:userId', (userCtrl.getUser));
router.post('/user/createUser', (userCtrl.createUser));
router.post('/user/authenticate', (userCtrl.authenticate));

