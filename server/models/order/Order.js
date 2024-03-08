import { Schema, model, models } from 'mongoose';


const orderSchema = new Schema({
    orderItems: [{
        type: Schema.Types.ObjectId,
        ref: 'OrderItem',
        required:true
    }],
    shippingAddress: {
        type: Object
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
        enum: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"],
        default: 'Pending',
    },
    totalPrice: {
        type: Number,
    },
    paymentStatus: {
        type: Boolean,
    },
    paymentMethod: {
        type: String
    },
    customerInformation: {
        type: Object
    },
    howDidYouFindUs: String,
    salesTerm: String

}, {timestamp: true})



const Order = models.Order || model('Order', orderSchema);

export default Order;