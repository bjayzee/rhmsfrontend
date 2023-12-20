import { Schema, model, models } from "mongoose";



const orderItemSchema = new Schema({
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    quantity: {
        type: Number,
        min: [1, "Quantity can not be less than one"],
        default: 1
    },
    price: {
        type: Number,
        min: [0, 'price can not be negative']
    },
    user: {
        type: String
    }
})

const OrderItem = models.OrderItem || model('OrderItem', orderItemSchema);

export default OrderItem;