const { Router } = require('express');
const RestaurantController = require('../controllers/RestaurantController');

const routes = Router();

//Query params: request.query  (Filters, sort, pagination)
//Routes params: request.params (identify a resource on edit or remove)
//Body: request.body (creation, change a register, mandatory action)

routes.get('/list', RestaurantController.index)
routes.get('/foodDetail/:id', RestaurantController.foodDetail);
routes.get('/userRequest/:userid', RestaurantController.userRequest);
routes.post('/userRequest', RestaurantController.store);

module.exports = routes;