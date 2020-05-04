const { Router } = require('express');
const RestaurantController = require('../controllers/RestaurantController');

const routes = Router();

//Query params: request.query  (Filters, sort, pagination)
//Routes params: request.params (identify a resource on edit or remove)
//Body: request.body (creation, change a register, mandatory action)

routes.get('/list', RestaurantController.index)
routes.get('/foodDetail/:id', RestaurantController.foodDetail);
routes.post('/storeQrCode', RestaurantController.storeQrCodeUrlRestaurant);
routes.post('/transaction', RestaurantController.getTransactionById);
routes.post('/account', RestaurantController.getAccount);
routes.post('/refund/', RestaurantController.refund);
routes.post('/userRequest', RestaurantController.store);

module.exports = routes;