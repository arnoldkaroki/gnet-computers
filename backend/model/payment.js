const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    transactionID: { type: String },
    order: [{ type: Schema.Types.objectId, ref: "Order" }],
    amount: Number,
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Payment', paymentSchema)