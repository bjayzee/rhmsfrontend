import { model, models, Schema } from "mongoose";


const OldiPhoneSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    storagePrice: {
        type: Number,
        required: true, 
    },
    lockPrice: {
        type: Number,
        required: true,        
    },
    conditionAndPrice: {
        type: Map,
        of: Number,
    },
   
})


const OldiPhone = models.OldiPhone || model('OldiPhone', OldiPhoneSchema);

export default OldiPhone;