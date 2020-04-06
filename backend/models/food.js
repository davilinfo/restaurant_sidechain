const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
    name: String,
    description: String,
    amount: Number,
    table: Number,
    request_type: Number,
    user_id: Number,
    closed: Boolean
});

module.exports = mongoose.model('Food', FoodSchema);