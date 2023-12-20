import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
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