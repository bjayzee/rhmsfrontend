const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: [true, 'password is required']
    },
    phone: {
        type: String,
        required: [true, 'phone number is required'],
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isSuperAdmin: {
        type: Boolean,
        default: false,
    },    
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
    },
    shippingAdress: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address',
    }
],

});

userSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

userSchema.set('toJSON', {
    virtuals: true,
});

exports.User = mongoose.model('User', userSchema);