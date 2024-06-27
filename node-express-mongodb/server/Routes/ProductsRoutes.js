const express = require('express');
const ProductsController = require('../controllers/ProductsController');

/**
 * By default, every router have access to params of their specific route. With
 * mergeParams, now we can get access to the params of the other routes, for example, 
 * the params in the route /:tourId/reviews in tourRoutes file. The route in this case will 
 * hit the route '/' here
 */
const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(ProductsController.getProducts)
  .post(ProductsController.saveProducts);

router
  .route('/:id')
  .delete(
    ProductsController.deleteProduct
  )
  .put(
    ProductsController.updateProduct
  );

module.exports = router;