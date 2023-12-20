import { Schema, model, models } from 'mongoose';

const addressSchema = new Schema({
    apartment: {
        type: String,
        required: [true, 'Insert apartment number']
    },
    street: {
        type: String,
        required: [true, 'Insert apartment number']
    },
    city: {
        type: String,
        required: [true, 'Insert city name']
    },
    zip: {
        type: String
    },
    localGovernment: {
        type: String,
        required: [true, 'Insert local government']
    },
    state: {
        type: String,
        required: [true, 'Insert state']
    },
    country: {
        type: String,
    },
}, {timestamp: true})


const Address = models.Address || model('Address', addressSchema);

export default Address;