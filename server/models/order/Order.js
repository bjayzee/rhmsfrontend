import { Schema, model, models } from 'mongoose';


const orderSchema = new Schema({
    orderItems: [{
        type: Schema.Types.ObjectId,
        ref: 'OrderItem',
        required:true
    }],
    shippingAddress: {
        type: Schema.Types.ObjectId,
        ref: 'Address',
    },
    deliveryFee: {
        type: Number
    },
    phoneNumber: {
        type: String,
        required: [true, 'Insert a phone number']
    },
    status: {
        type: String,
        required: [true, 'Insert order status'],
        enum: ["Pending", "Processing", "Shipped", "Delivered"],
        default: 'Pending',
    },
    totalPrice: {
        type: Number,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'RHMSUsers',
    },
    paymentStatus: {
        type: Boolean,
    },
    paymentMethod: {
        type: String
    },
    deliveryPaymentStatus: {
        type: Boolean
    }
}, {timestamp: true})



const Order = models.Order || model('Order', orderSchema);

export default Order;