const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    orderNumber: Number,
    orderItems:[],
    total: { type: Number, required: true },
    status:{
        type:String,
        default:"pending",
    },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', orderSchema);