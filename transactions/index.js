const Food = require("./FoodTransaction");
import from "./RefundTransaction");
import from "./DeliveryTransaction");

exports.FoodRequest = function(passphrase, foodtype, username, phone, deliveryaddress){
	var food = new Food(foodtype, username, phone, deliveryaddress);
	food.sign(passphrase);
	return food;
}

module.exports = FoodRequest;