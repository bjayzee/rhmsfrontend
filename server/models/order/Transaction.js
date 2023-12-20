const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema({
    status: {
        type: String,
        required: [true, 'Insert payment status'],
        default: 'Pending',
    },
    paymentMethod: {
        type: String
    },
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
    }
}, {timestamp: true})

transactionSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

transactionSchema.set('toJSON', {
    virtuals: true,
});

exports.Transaction = mongoose.model('Transaction', transactionSchema);