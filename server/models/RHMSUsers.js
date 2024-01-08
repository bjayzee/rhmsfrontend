import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    type: {
        type: String,
        required: true,
        default: 'guest',
        enum: ['guest', 'customer']
    },
    email: {
        type: String,
        unique: [true, 'email already exist']
    },
    password: {
        type: String,
    },
    phoneNumber: {
        type: String,
        unique: [true, 'Phone number already exist']
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
        type: Schema.Types.ObjectId,
        ref: 'Address'
    },
    shippingAdress: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Address',
    },
    ],
    cart: [{
        type: Schema.Types.ObjectId,
        ref: 'OrderItem'
    }]

},
{timestamps: true});

const User = models.User || model('User', userSchema);

export default User;