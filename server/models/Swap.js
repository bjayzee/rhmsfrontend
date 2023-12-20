const mongoose = require('mongoose');

const swapSchema = mongoose.Schema({
    OldPhone: {
        type: String,
        required: [true, 'Insert old phone model']
    },
    OldPhoneValue: {
        type: Number,
        required: [true, 'Insert old phone value']
    },
    targetPhone: {
        type: String,
        required: [true, 'Insert target phone model']
    },
    targetPhoneValue: {
        type: Number,
        required: [true, 'Insert target phone value']
    },
    swapValue: {
        type: Number,
        required: [true, 'Insert swap value']
    }
}, {timestamp: true})

addressSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

addressSchema.set('toJSON', {
    virtuals: true,
});

exports.Address = mongoose.model('Address', addressSchema);